export default function SearchBox({ query, setQuery, filteredCount }) {
  return (
    <div className="card space-y-6 lg:col-span-2 animate-fade-in [animation-delay:100ms]">
      <div>
        <div className="card-header">
          <h2 className="card-title flex items-center gap-2">
            <span>🔍</span> بحث متقدم
          </h2>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs px-2 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              مسح البحث ✕
            </button>
          )}
        </div>
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field"
            placeholder="ابحث بالاسم أو رقم التعريف..."
          />
          {query && (
            <div className="absolute right-3 top-3 text-slate-400 text-sm">
              {filteredCount} نتيجة
            </div>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="rounded-xl border-l-4 border-primary-500 bg-primary-50 p-4">
        <div className="flex gap-3">
          <span className="text-2xl">ℹ️</span>
          <div className="text-sm text-slate-700">
            <p className="font-semibold mb-1">نصائح الاستخدام:</p>
            <ul className="text-slate-600 list-disc list-inside space-y-1">
              <li>يمكنك البحث بالاسم أو رقم التعريف</li>
              <li>اضغط على زر التعديل لتصحيح البيانات</li>
              <li>البيانات محفوظة محلياً على جهازك</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
