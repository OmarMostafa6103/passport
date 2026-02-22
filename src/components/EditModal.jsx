export default function EditModal({
  editingId,
  editName,
  setEditName,
  editPassport,
  setEditPassport,
  onSaveEdit,
  onCancelEdit,
}) {
  if (!editingId) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 animate-fade-in overflow-y-auto"
      onClick={onCancelEdit}
    >
      <div 
        className="relative w-full max-w-md my-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl sm:rounded-3xl opacity-50"></div>
        
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/60 shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-b border-primary-500/20">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            <h2 className="relative flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <span className="text-base sm:text-lg md:text-xl">✏️</span>
              </div>
              <span>تعديل بيانات الخبير</span>
            </h2>
          </div>

          <form onSubmit={onSaveEdit} className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Name Input */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <span className="text-base sm:text-lg">👤</span>
                <span>اسم الخبير</span>
              </label>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:border-primary-500 focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-primary-500/10 text-sm sm:text-base font-medium"
                placeholder="الاسم الجديد..."
                autoFocus
              />
            </div>

            {/* Passport Input */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <span className="text-base sm:text-lg">🆔</span>
                <span>رقم التعريف</span>
              </label>
              <input
                value={editPassport}
                onChange={(e) => setEditPassport(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:border-primary-500 focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-primary-500/10 text-sm sm:text-base font-medium font-mono"
                placeholder="رقم التعريف الجديد..."
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <span className="text-base sm:text-lg">💾</span>
                <span>حفظ التعديلات</span>
              </button>
              <button
                type="button"
                onClick={onCancelEdit}
                className="flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl border-2 border-slate-300 bg-white text-slate-700 text-sm sm:text-base font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <span className="text-base sm:text-lg">❌</span>
                <span>إلغاء</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
