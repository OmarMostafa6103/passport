export default function Footer() {
  return (
    <footer className="relative mt-8 sm:mt-12 md:mt-16 py-6 sm:py-8 text-center border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50/50">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative px-3 sm:px-4">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary-300"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-500"></div>
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary-300"></div>
        </div>
        
        <p className="text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
          تم تطويره بـ
          <span className="inline-block mx-1 sm:mx-2 animate-pulse">❤️</span>
          باستخدام
        </p>
        
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-semibold">
            React
          </span>
          <span className="text-slate-400 text-xs sm:text-sm">+</span>
          <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 text-[10px] sm:text-xs font-semibold">
            Tailwind CSS
          </span>
        </div>
        
        <p className="text-[10px] sm:text-xs text-slate-500">
          © {new Date().getFullYear()} نظام إدارة الجوازات - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
