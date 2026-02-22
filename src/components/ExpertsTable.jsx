export default function ExpertsTable({ filtered, total, onEdit, onRemove }) {
  return (
    <div className="relative mt-6 sm:mt-8 animate-fade-in [animation-delay:200ms]">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/60 shadow-xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-50 to-slate-100/50 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-slate-800">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                <span className="text-base sm:text-lg md:text-xl">📊</span>
              </div>
              <span>قائمة الخبراء</span>
            </h2>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-primary-50 border border-primary-200">
              <span className="text-xs sm:text-sm font-semibold text-primary-700">
                {filtered.length}
              </span>
              <span className="text-primary-400">/</span>
              <span className="text-xs sm:text-sm font-medium text-primary-600">
                {total}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        {filtered.length === 0 ? (
          <div className="py-12 sm:py-16 px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">📭</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-1 sm:mb-2">
              لا توجد خبراء بعد
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto px-2">
              ابدأ بإضافة أول خبير جديد باستخدام النموذج أعلاه
            </p>
          </div>
        ) : (
          <>
            {/* Mobile Card View */}
            <div className="block md:hidden divide-y divide-slate-100">
              {filtered.map((r, idx) => (
                <div
                  key={r.id}
                  className="p-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/30 transition-all duration-200"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold shadow-sm flex-shrink-0">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                          {r.name}
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary-50 border border-primary-200 font-mono text-primary-700 font-bold text-xs">
                            {r.passport}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span>
                          {new Date(r.createdAt).toLocaleDateString("ar-EG", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {new Date(r.createdAt).toLocaleTimeString("ar-EG", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEdit(r)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-xs hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 active:scale-95"
                      >
                        <span>✏️</span>
                        <span className="hidden xs:inline">تعديل</span>
                      </button>
                      <button
                        onClick={() => onRemove(r.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 font-semibold text-xs hover:bg-red-100 hover:border-red-300 transition-all duration-200 active:scale-95"
                      >
                        <span>🗑️</span>
                        <span className="hidden xs:inline">حذف</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-slate-100/50 border-b-2 border-slate-200">
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-right text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                      👤 الاسم
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-right text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                      🆔 رقم التعريف
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-right text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                      📅 تاريخ الإضافة
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-right text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                      ⚙️ الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((r, idx) => (
                    <tr
                      key={r.id}
                      className="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/30 transition-all duration-200"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold shadow-sm">
                            {r.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-semibold text-slate-900 text-sm sm:text-base">
                            {r.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-primary-50 border border-primary-200 font-mono text-primary-700 font-bold text-xs sm:text-sm">
                          {r.passport}
                        </span>
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-600">
                          <span className="text-xs sm:text-sm">
                            {new Date(r.createdAt).toLocaleDateString("ar-EG", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-[10px] sm:text-xs text-slate-400">
                            {new Date(r.createdAt).toLocaleTimeString("ar-EG", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4">
                        <div className="flex items-center gap-1.5 sm:gap-2 justify-end">
                          <button
                            onClick={() => onEdit(r)}
                            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-xs sm:text-sm hover:bg-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 active:scale-95"
                          >
                            <span>✏️</span>
                            <span>تعديل</span>
                          </button>
                          <button
                            onClick={() => onRemove(r.id)}
                            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 text-red-700 font-semibold text-xs sm:text-sm hover:bg-red-100 hover:border-red-300 hover:shadow-md transition-all duration-200 active:scale-95"
                          >
                            <span>🗑️</span>
                            <span>حذف</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
