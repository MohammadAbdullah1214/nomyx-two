import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { X, Check } from "lucide-react";
import getCroppedImg from "@/lib/cropImage";

type ImageCropperModalProps = {
  imageSrc: string;
  onClose: () => void;
  onCropComplete: (croppedFile: File) => void;
};

export default function ImageCropperModal({
  imageSrc,
  onClose,
  onCropComplete,
}: ImageCropperModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const saveCrop = async () => {
    try {
      setIsProcessing(true);
      const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);
      if (croppedFile) {
        onCropComplete(croppedFile);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[16px] border border-border bg-white shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-slate-50">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
            Adjust Image
          </h2>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative w-full h-[400px] bg-black">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <div className="px-6 py-5 bg-white border-t border-border flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-ink-muted">Zoom</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => {
                setZoom(Number(e.target.value));
              }}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>
          <div className="flex items-center justify-end gap-3 mt-2">
            <button
              onClick={onClose}
              disabled={isProcessing}
              className="px-5 py-2.5 rounded-[8px] text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveCrop}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[11px] font-bold uppercase tracking-[0.14em] bg-accent text-white hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              <Check size={14} />
              {isProcessing ? "Processing..." : "Save Crop"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
