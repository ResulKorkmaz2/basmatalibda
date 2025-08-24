export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Loading */}
        <div className="relative mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto animate-pulse"></div>
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary-500/50 to-primary-600/50 rounded-full mx-auto animate-ping"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">بصمة لابداع</h2>
        <p className="text-gray-600 mb-8">جاري التحميل...</p>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-1 space-x-reverse">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}
