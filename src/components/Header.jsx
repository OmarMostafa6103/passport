export default function Header({ query, setQuery, total, searchResults = [] }) {
  return (
    <header className="relative overflow-visible bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 shadow-2xl">
      {/* Decorative Background Elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/20 shadow-lg">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block">
                  👨‍💼
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">
                نظام الإدارة
              </h1>
              <p className="text-primary-100 text-xs sm:text-sm md:text-base hidden sm:block">
                إدارة شاملة للسجلات
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 w-full sm:w-auto justify-between sm:justify-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-base sm:text-lg md:text-xl">📊</span>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-primary-100 font-medium">
                الإجمالي
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {total}
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl blur-xl"></div>
          <div className="relative flex items-center gap-2 sm:gap-3">
            <div className="flex-1 relative">
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-primary-300 text-base sm:text-lg md:text-xl pointer-events-none z-10">
                🔍
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن سجل..."
                className={`w-full pr-10 sm:pr-12 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl bg-white backdrop-blur-sm text-slate-900 placeholder-slate-500 outline-none focus:ring-2 sm:focus:ring-4 focus:ring-primary-400/50 focus:bg-white transition-all duration-300 shadow-xl text-sm sm:text-base font-medium ${
                  query ? "pl-10 sm:pl-12 md:pl-14" : "pl-3 sm:pl-4"
                }`}
                style={{ color: "#0f172a" }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-800 transition-all duration-200 active:scale-95 z-10"
                  aria-label="مسح البحث"
                >
                  <span className="text-xs sm:text-sm font-bold">✕</span>
                </button>
              )}

              {/* Search Results Dropdown */}
              {query && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 max-h-80 overflow-y-auto z-50">
                  <div className="p-2">
                    <div className="text-xs text-slate-500 px-3 py-2 font-semibold border-b border-slate-100">
                      نتائج البحث ({searchResults.length})
                    </div>
                    {searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer border-b border-slate-50 last:border-b-0"
                        onClick={() => {
                          // يمكن إضافة وظيفة للانتقال للسجل
                          setQuery(result.name);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold shadow-sm flex-shrink-0">
                            {result.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-900 text-sm truncate">
                              {result.name}
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5 font-mono">
                              {result.passport}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {query && searchResults.length === 0 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 z-50">
                  <div className="p-4 text-center">
                    <div className="text-3xl mb-2">🔍</div>
                    <p className="text-sm text-slate-600">لا توجد نتائج</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white/10"></div>
    </header>
  );
}
