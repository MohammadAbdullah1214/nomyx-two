"use client";

import { useEffect, useState } from "react";
import {
  FolderTree,
  Plus,
  Trash2,
  Search,
  Edit2,
  EyeOff,
  Eye,
  Check,
  X,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import type { NewsCategory } from "@/lib/news";

// Modal component
function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  category,
  categories,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (transferToId?: string) => void;
  category: NewsCategory | null;
  categories: NewsCategory[];
}) {
  const [transferId, setTransferId] = useState<string>("");

  if (!isOpen || !category) return null;

  const hasNews = (category.newsCount ?? 0) > 0;
  const otherCategories = categories.filter((c) => c.id !== category.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/20 backdrop-blur-sm">
      <div className="bg-white rounded-[12px] shadow-[0_24px_64px_rgba(10,17,40,0.12)] p-8 max-w-md w-full border border-border mx-4">
        <div className="flex items-center gap-4 mb-4 text-red-600">
          <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <Trash2 size={24} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Delete Category
          </h2>
        </div>

        <p className="text-ink-muted text-sm mb-6 leading-relaxed">
          Are you sure you want to delete the{" "}
          <span className="font-bold text-ink">"{category.name}"</span>{" "}
          category? This action cannot be undone.
        </p>

        {hasNews && (
          <div className="bg-amber-50 border border-amber-200 rounded-[8px] p-4 mb-6">
            <div className="flex items-start gap-3 text-amber-800">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold mb-2">
                  This category contains {category.newsCount} news article(s).
                </p>
                <p className="text-xs mb-3">
                  Please select another category to transfer them to, or choose
                  "No Category".
                </p>
                <select
                  value={transferId}
                  onChange={(e) => setTransferId(e.target.value)}
                  className="w-full h-10 px-3 rounded-md border border-amber-200 bg-white text-sm outline-none focus:border-amber-400"
                >
                  <option value="" disabled>
                    Select a category...
                  </option>
                  <option value="none">No Category (Uncategorized)</option>
                  {otherCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-ink-muted hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(hasNews ? transferId : undefined)}
            disabled={hasNews && !transferId}
            className="px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesCmsPage() {
  const [categories, setCategories] = useState<NewsCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<NewsCategory | null>(
    null,
  );

  const loadCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/news-categories");
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Failed to load categories");
      setCategories(data.categories || []);
    } catch (error) {
      console.error(error);
      toast.error("Could not load categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newCategoryName.trim();
    if (!name) return;

    setSaving(true);
    try {
      const response = await fetch("/api/admin/news-categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.error || "Failed to create category");

      toast.success("Category created successfully");
      setNewCategoryName("");
      loadCategories(); // reload to get count/status correctly
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create category",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateCategory = async (
    id: string,
    name: string,
    status: "active" | "hidden",
  ) => {
    try {
      const response = await fetch(`/api/admin/news-categories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, status }),
      });
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.error || "Failed to update category");

      toast.success("Category updated");
      setEditingId(null);
      loadCategories();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update category",
      );
    }
  };

  const startDelete = (category: NewsCategory) => {
    setCategoryToDelete(category);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async (transferToId?: string) => {
    if (!categoryToDelete) return;

    setDeleteModalOpen(false);

    try {
      const url = new URL(
        `/api/admin/news-categories/${categoryToDelete.id}`,
        window.location.origin,
      );
      if (transferToId) {
        url.searchParams.set("transferToCategoryId", transferToId);
      }

      const response = await fetch(url.toString(), {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete category");
      }

      toast.success("Category deleted");
      loadCategories();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Failed to delete category",
      );
    }
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.32),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_24%,#f8fafc_100%)] text-ink">
      <div className="custom-container py-12 md:py-14">
        {/* Navigation & Header */}
        <div className="mb-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 inline-flex rounded-[6px] border border-[#1B243C] px-4 py-1 text-sm font-medium text-[#1B243C]">
                Category Management
              </p>
              <h1 className="text-[clamp(36px,5vw,25px)] font-medium tracking-[-0.03em] leading-[1.02] text-[#19233D]">
                News Categories
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted md:text-[16px]">
                Create, organize, and manage categories to structure your news
                articles and press releases.
              </p>
            </div>
          </div>
        </div>

        {/* Add Category Section */}
        <div className="mb-8 p-6 bg-white border border-border shadow-sm rounded-none">
          <form
            onSubmit={handleCreateCategory}
            className="flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="flex-1 w-full">
              <label className="block text-[11px] font-bold uppercase tracking-widest text-ink-muted mb-2">
                Create New Category
              </label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="e.g. Press Releases, Company Updates"
                className="w-full h-12 px-4 bg-slate-50 border border-border focus:bg-white focus:border-accent transition-colors outline-none text-sm font-medium"
                required
              />
            </div>
            <button
              type="submit"
              disabled={saving || !newCategoryName.trim()}
              className="h-12 px-4 py-3 rounded-[9px] bg-ink text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-slate-800 transition-colors shrink-0"
            >
              {saving ? (
                "Creating..."
              ) : (
                <>
                  <Plus size={16} /> Create
                </>
              )}
            </button>
          </form>
        </div>

        {/* Stats & Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4 w-full md:w-auto">
            <div className="border border-border bg-white px-6 py-4 shadow-sm flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-accent">
                <FolderTree size={20} />
              </div>
              <div>
                <div className="text-2xl font-black">{categories.length}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                  Total Categories
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-96">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-white border border-border shadow-sm outline-none focus:border-accent transition-colors text-sm font-medium"
            />
          </div>
        </div>

        {/* Table Content */}
        <div className="bg-white border border-border shadow-[0_24px_64px_rgba(10,17,40,0.08)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-border">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted w-1/3">
                    Name
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                    URL Slug
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted text-center">
                    News Posts
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-ink-muted italic"
                    >
                      Loading categories...
                    </td>
                  </tr>
                ) : filteredCategories.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-ink-muted italic"
                    >
                      No categories found.
                    </td>
                  </tr>
                ) : (
                  filteredCategories.map((cat) => (
                    <tr
                      key={cat.id}
                      className={`hover:bg-slate-50/50 transition-colors ${cat.status === "hidden" ? "bg-slate-50/30" : ""}`}
                    >
                      <td className="px-6 py-5">
                        {editingId === cat.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              className="h-9 px-3 w-full border border-accent rounded outline-none text-sm font-bold bg-white"
                              autoFocus
                            />
                            <button
                              onClick={() =>
                                handleUpdateCategory(
                                  cat.id,
                                  editingName,
                                  cat.status,
                                )
                              }
                              className="p-1.5 bg-accent text-white rounded hover:bg-blue-700"
                            >
                              <Check size={16} />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-1.5 bg-slate-200 text-ink rounded hover:bg-slate-300"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <FolderTree
                              size={16}
                              className={
                                cat.status === "hidden"
                                  ? "text-slate-400"
                                  : "text-accent"
                              }
                            />
                            <span
                              className={`font-bold uppercase tracking-tight text-sm ${cat.status === "hidden" ? "text-ink-muted" : "text-ink"}`}
                            >
                              {cat.name}
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-xs font-mono text-ink-muted bg-slate-100 px-2 py-1 rounded">
                          /{cat.slug}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-flex items-center justify-center min-w-[32px] h-8 px-2 rounded-full bg-blue-50 text-accent font-bold text-xs border border-blue-100">
                          {cat.newsCount ?? 0}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        {cat.status === "hidden" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-100 rounded text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                            <EyeOff size={12} /> Hidden
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                            <Eye size={12} /> Active
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              handleUpdateCategory(
                                cat.id,
                                cat.name,
                                cat.status === "hidden" ? "active" : "hidden",
                              )
                            }
                            className="p-2 text-ink-muted hover:text-ink hover:bg-slate-100 rounded transition-colors"
                            title={
                              cat.status === "hidden"
                                ? "Make Active"
                                : "Hide Category"
                            }
                          >
                            {cat.status === "hidden" ? (
                              <Eye size={16} />
                            ) : (
                              <EyeOff size={16} />
                            )}
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(cat.id);
                              setEditingName(cat.name);
                            }}
                            className="p-2 text-ink-muted hover:text-accent hover:bg-blue-50 rounded transition-colors"
                            title="Edit Category"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => startDelete(cat)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            title="Delete Category"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        category={categoryToDelete}
        categories={categories}
      />
    </div>
  );
}
