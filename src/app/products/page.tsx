// 'use client'

// import React from 'react'

// import Navbar from '@/components/global/navbar'

// const ProductsPage = () => {
//   return (
//     <div className="min-h-screen bg-black">
//       <Navbar />
      
//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             Our <span className="text-[#a18cd1]">Products</span>
//           </h1>
//           <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//             Discover our powerful automation tools that will revolutionize your workflow
//           </p>
//         </div>
        
//         {/* Video Container */}
//         <div className="w-full max-w-4xl mx-auto">
//           <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-black/50 backdrop-blur-sm">
//             {/* Placeholder for video - replace src with your actual video */}
//             <video
//               className="w-full h-full object-cover"
//               controls
//               autoPlay
//               muted
//               loop
//             >
//               <source src="/autifyrecord.mkv" type="video/mp4" />
//               <source src="/autifyrecord.mkv" type="video/webm" />
//               Your browser does not support the video tag.
//             </video>
            
//             {/* Gradient overlay for better text visibility */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//           </div>
          
//           {/* Video Description */}
//           <div className="mt-6 text-center">
//             <h3 className="text-2xl font-semibold text-white mb-2">
//               Autify Demo
//             </h3>
//             <p className="text-neutral-400 max-w-2xl mx-auto">
//               Watch how Autify streamlines your automation workflow with powerful features and intuitive design.
//             </p>
//           </div>
//         </div>
        
//         {/* Additional Content */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <div className="text-center p-6 rounded-2xl border border-neutral-800 bg-black/30 backdrop-blur-sm">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#a18cd1] to-[#393BB2] flex items-center justify-center">
//               <span className="text-2xl">⚡</span>
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
//             <p className="text-neutral-400">Execute automation workflows with incredible speed and efficiency</p>
//           </div>
          
//           <div className="text-center p-6 rounded-2xl border border-neutral-800 bg-black/30 backdrop-blur-sm">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#a18cd1] to-[#393BB2] flex items-center justify-center">
//               <span className="text-2xl">🔒</span>
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
//             <p className="text-neutral-400">Enterprise-grade security with 99.9% uptime guarantee</p>
//           </div>
          
//           <div className="text-center p-6 rounded-2xl border border-neutral-800 bg-black/30 backdrop-blur-sm">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#a18cd1] to-[#393BB2] flex items-center justify-center">
//               <span className="text-2xl">🎯</span>
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">Intuitive Design</h3>
//             <p className="text-neutral-400">User-friendly interface that makes automation accessible to everyone</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductsPage 