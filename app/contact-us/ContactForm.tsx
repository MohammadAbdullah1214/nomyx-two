"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import "./contact.css";

const REASON_OPTIONS = [
  "Sales / Platform Inquiry",
  "Partnerships / Integrations",
  "Investor Relations",
  "Media / Press",
  "Other",
];

declare global {
  interface Window {
    cfields?: Record<string, string>;
    _show_thank_you?: (id: string, message: string, trackcmp_url?: string, email?: string) => void;
    _show_error?: (id: string, message: string, html?: string) => void;
    _show_field_error?: (id: string, field: string, message: string, highlight?: string) => void;
    _load_script?: (url: string, callback?: (() => void) | null, isSubmit?: boolean) => void;
    recaptcha_callback?: () => void;
    grecaptcha?: any;
    intlTelInput?: any;
    visitorGlobalObjectAlias?: string;
  }
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const itiRef = useRef<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom Dropdown state
  const [selectedReason, setSelectedReason] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle click outside to close custom dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    window.cfields = {
      "16": "reason_for_contact",
      "15": "contact_message",
      "17": "marketing_consent",
    };

    window._show_thank_you = (id, message, trackcmp_url, email) => {
      setIsSubmitting(false);
      setSubmitted(true);
      setThankYouMessage(message || "Thank you for reaching out! Your message has been sent to the Nomyx team.");

      // Fire tracking if provided by ActiveCampaign
      try {
        const vgoAlias = typeof window.visitorGlobalObjectAlias === "undefined" ? "vgo" : window.visitorGlobalObjectAlias;
        const visitorObject = (window as any)[vgoAlias];
        if (email && typeof visitorObject !== "undefined") {
          visitorObject("setEmail", email);
          visitorObject("update");
        } else if (trackcmp_url && window._load_script) {
          window._load_script(trackcmp_url);
        }
      } catch {
        // ignore tracking errors
      }
    };

    window._show_error = (id, message) => {
      setIsSubmitting(false);
      setErrorMessage(message || "Sorry, your submission failed. Please try again.");
    };

    window._show_field_error = (id, field, message) => {
      setIsSubmitting(false);
      setErrorMessage(message || "Please check the entered information.");
      const input = formRef.current?.querySelector<HTMLElement>(`[name="${field}"]`);
      input?.focus();
    };

    window._load_script = (url, callback, isSubmit) => {
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.charset = "utf-8";
      script.src = url;
      if (callback) {
        script.onload = () => {
          callback();
        };
      }
      script.onerror = () => {
        if (isSubmit) {
          setErrorMessage("Sorry, your submission failed. Please try again.");
          setIsSubmitting(false);
        }
      };
      head?.appendChild(script);
    };

    // Initialize intl-tel-input
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/css/intlTelInput.css";
    document.head.appendChild(link);

    const updatePhonePadding = (inputEl: HTMLInputElement) => {
      const flagBtn = formRef.current?.querySelector<HTMLElement>(".iti__selected-country, .iti__selected-flag");
      if (flagBtn && inputEl) {
        const width = flagBtn.offsetWidth;
        if (width > 0) {
          inputEl.style.setProperty("padding-left", `${width + 12}px`, "important");
        }
      }
    };

    const scriptIti = document.createElement("script");
    scriptIti.src = "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/intlTelInput.min.js";
    scriptIti.onload = () => {
      const inputPhone = formRef.current?.querySelector<HTMLInputElement>('input[name="phone"]');
      if (inputPhone && window.intlTelInput) {
        itiRef.current = window.intlTelInput(inputPhone, {
          loadUtils: () =>
            new Function(
              'return import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/utils.js")'
            )(),
          separateDialCode: true,
          initialCountry: "us",
        });

        inputPhone.addEventListener("countrychange", () => {
          updatePhonePadding(inputPhone);
        });

        setTimeout(() => {
          updatePhonePadding(inputPhone);
        }, 60);
      }
    };
    document.body.appendChild(scriptIti);

    // Initialize reCAPTCHA
    window.recaptcha_callback = () => {
      const el = document.querySelector<HTMLElement>("#cform .g-recaptcha");
      if (el && window.grecaptcha) {
        try {
          window.grecaptcha.render(el, {
            sitekey: "6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go",
          });
        } catch {
          // ignore if already rendered
        }
      }
    };

    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const scriptRecaptcha = document.createElement("script");
      scriptRecaptcha.src = "https://www.google.com/recaptcha/api.js?onload=recaptcha_callback&render=explicit";
      scriptRecaptcha.async = true;
      scriptRecaptcha.defer = true;
      document.body.appendChild(scriptRecaptcha);
    } else if (window.grecaptcha) {
      window.recaptcha_callback();
    }

    return () => {
      if (itiRef.current && typeof itiRef.current.destroy === "function") {
        itiRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const form = formRef.current;
    if (!form) return;

    // Validate required fields
    const fullNameInput = form.querySelector<HTMLInputElement>('input[name="fullname"]');
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="field[15]"]');

    if (!fullNameInput?.value.trim()) {
      setErrorMessage("Please enter your full name.");
      fullNameInput?.focus();
      return;
    }

    const emailValue = emailInput?.value.trim() || "";
    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setErrorMessage("Please enter a valid work email address.");
      emailInput?.focus();
      return;
    }

    if (!selectedReason) {
      setErrorMessage("Please select a reason for contact.");
      setIsDropdownOpen(true);
      return;
    }

    if (!messageInput?.value.trim()) {
      setErrorMessage("Please enter a message.");
      messageInput?.focus();
      return;
    }

    // Verify reCAPTCHA completed
    if (typeof window !== "undefined" && window.grecaptcha) {
      const response = window.grecaptcha.getResponse();
      if (!response) {
        setErrorMessage("Please complete the reCAPTCHA verification.");
        return;
      }
    }

    // Update phone with international code if available
    const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]');
    if (phoneInput && itiRef.current && typeof itiRef.current.getNumber === "function") {
      const fullPhone = itiRef.current.getNumber();
      if (fullPhone) {
        phoneInput.value = fullPhone;
      }
    }

    setIsSubmitting(true);

    // Serialize form
    const formData = new FormData(form);
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value.toString());
    });

    const serialized = searchParams.toString();

    if (window._load_script) {
      window._load_script("https://nomyx.activehosted.com/proc.php?" + serialized + "&jsonp=true", null, true);
    } else {
      // Fallback post
      fetch("https://nomyx.activehosted.com/proc.php", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
        .then(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setThankYouMessage("Thank you for reaching out! Your message has been sent to the Nomyx team.");
        })
        .catch(() => {
          setIsSubmitting(false);
          setErrorMessage("Sorry, your submission failed. Please try again.");
        });
    }
  };

  return (
    <div id="cform">
      {errorMessage ? (
        <div className="_error-inner" role="alert">
          {errorMessage}
        </div>
      ) : null}

      {submitted ? (
        <div className="_form-thank-you" role="status">
          <h3 className="text-xl font-semibold text-[#19233D] mb-2">Message Sent!</h3>
          <p className="text-sm text-[#42546E]">{thankYouMessage}</p>
        </div>
      ) : (
        <form
          ref={formRef}
          method="POST"
          action="https://nomyx.activehosted.com/proc.php"
          id="_form_3_"
          className="_form _form_3 _inline-form _dark"
          noValidate
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="u" value="3" />
          <input type="hidden" name="f" value="3" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <input type="hidden" name="or" value="978ba4e4-4201-4b17-a73b-1ad69df19210" />

          <div className="_form-content">
            {/* Full Name */}
            <div className="_form_element _field_name">
              <label htmlFor="fullname" className="_form-label">
                Full Name<span className="field-required">*</span>
              </label>
              <div className="_field-wrapper">
                <input type="text" id="fullname" name="fullname" placeholder="Your full name" required />
              </div>
            </div>

            {/* Work Email */}
            <div className="_form_element _field_email">
              <label htmlFor="email" className="_form-label">
                Work Email<span className="field-required">*</span>
              </label>
              <div className="_field-wrapper">
                <input type="text" id="email" name="email" placeholder="you@company.com" required />
              </div>
            </div>

            {/* Company */}
            <div className="_form_element _field_customer_account">
              <label htmlFor="customer_account" className="_form-label">
                Company / Organization
              </label>
              <div className="_field-wrapper">
                <input
                  type="text"
                  id="customer_account"
                  name="customer_account"
                  placeholder="Your company or organization"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="_form_element _field_phone">
              <label htmlFor="phone" className="_form-label">
                Phone Number
              </label>
              <div className="_field-wrapper">
                <input type="text" id="phone" name="phone" placeholder="Phone number" />
              </div>
            </div>

            {/* Reason for Contact (Custom Styled Dropdown) */}
            <div className="_form_element _field16 _full_width">
              <label htmlFor="field[16]" className="_form-label">
                Reason for Contact<span className="field-required">*</span>
              </label>
              <div className="_field-wrapper relative" ref={dropdownRef}>
                {/* Hidden input for submission */}
                <input
                  type="hidden"
                  name="field[16]"
                  id="field[16]"
                  value={selectedReason}
                  required
                />

                {/* Custom Trigger Button */}
                <button
                  type="button"
                  id="reason-dropdown-trigger"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-[10px] text-[15px] border transition-all duration-150 text-left cursor-pointer ${
                    isDropdownOpen
                      ? "border-[#215EC7] bg-white ring-4 ring-[#215EC7]/15 shadow-sm"
                      : "border-[#D3DBE7] bg-[#F7F9FC] hover:border-[#B8C5D8] hover:bg-white"
                  }`}
                >
                  <span className={selectedReason ? "text-[#0A1128] font-medium" : "text-[#8A94A6]"}>
                    {selectedReason || "Select a reason"}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#42546E] transition-transform duration-200 shrink-0 ${
                      isDropdownOpen ? "rotate-180 text-[#215EC7]" : ""
                    }`}
                  />
                </button>

                {/* Custom Animated Options Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-white border border-[#D3DBE7] rounded-xl shadow-[0_14px_35px_-8px_rgba(10,17,40,0.18)] py-1.5 overflow-hidden"
                      role="listbox"
                    >
                      {REASON_OPTIONS.map((option) => {
                        const isSelected = selectedReason === option;
                        return (
                          <div
                            key={option}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedReason(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2.5 text-[14.5px] cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-[#EAF1FD] text-[#215EC7] font-semibold"
                                : "text-[#0A1128] hover:bg-[#F2F9FF] hover:text-[#215EC7]"
                            }`}
                          >
                            <span>{option}</span>
                            {isSelected && <Check size={16} className="text-[#215EC7]" />}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Message */}
            <div className="_form_element _field15 _full_width">
              <label htmlFor="field[15]" className="_form-label">
                Message<span className="field-required">*</span>
              </label>
              <div className="_field-wrapper">
                <textarea
                  id="field[15]"
                  name="field[15]"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Marketing Consent */}
            <div className="_form_element _field17 _full_width">
              <fieldset className="_form-fieldset">
                <legend className="form-sr-only">Marketing Consent</legend>
                <input data-autofill="false" type="hidden" id="field[17][]" name="field[17][]" value="~|" />
                <div className="_checkbox-radio">
                  <input
                    id="field_17_consent"
                    type="checkbox"
                    name="field[17][]"
                    value="I'd like to receive industry insights, news, and updates from Nomyx."
                  />
                  <label htmlFor="field_17_consent">
                    I'd like to receive industry insights, news, and updates from Nomyx.
                  </label>
                </div>
              </fieldset>
            </div>

            {/* ReCAPTCHA */}
            <div className="_form_element _field_captcha _full_width">
              <label htmlFor="g-recaptcha-response" className="_form-label">
                Please verify you are human<span className="field-required">*</span>
              </label>
              <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"></div>
            </div>

            {/* Submit Button */}
            <div className="_button-wrapper _full_width mt-2">
              <button
                id="_form_3_submit"
                className={`_submit ${isSubmitting ? "processing" : ""}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
