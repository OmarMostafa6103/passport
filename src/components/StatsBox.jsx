export default function StatsBox({ total, filtered }) {
  return (
    <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Experts Card */}
      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-lg sm:text-xl md:text-2xl">👥</span>
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-200/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              إجمالي
            </div>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-0.5 sm:mb-1">
            {total}
          </div>
          <div className="text-xs sm:text-sm font-medium text-blue-600/80">
            الإجمالي
          </div>
        </div>
      </div>

      {/* Search Results Card */}
      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50 p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-lg sm:text-xl md:text-2xl">🔍</span>
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-purple-600 bg-purple-200/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              نتائج
            </div>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-0.5 sm:mb-1">
            {filtered}
          </div>
          <div className="text-xs sm:text-sm font-medium text-purple-600/80">
            نتائج البحث
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 md:col-span-2 lg:col-span-1">
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-lg sm:text-xl md:text-2xl">
                {total > 0 ? "✓" : "○"}
              </span>
            </div>
            <div
              className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                total > 0
                  ? "text-emerald-600 bg-emerald-200/50"
                  : "text-slate-600 bg-slate-200/50"
              }`}
            >
              {total > 0 ? "نشط" : "فارغ"}
            </div>
          </div>
          <div
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 ${
              total > 0 ? "text-emerald-700" : "text-slate-600"
            }`}
          >
            {total > 0 ? "نشط" : "فارغ"}
          </div>
          <div className="text-xs sm:text-sm font-medium text-emerald-600/80">
            حالة النظام
          </div>
        </div>
      </div>
    </div>
  );
}
