
const  fileName = 'fk-front' // 打包后的路径
module.exports={
    lintOnSave:false,
    outputDir: fileName,
   

    publicPath:'./', //基础根路径
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy:{
            //代理
            '/api':{                
                target:'http://120.55.53.66:8978/',                
                ws:true,                
                changeOrigin:true,                
                pathRewrite:{                    
                    '^/api':''                
                }            
            
        }
    },
  
      
    },
    configureWebpack: {
        resolve: {
          alias: {
            assets: "@/assets",
            components: "@/components",
            network: "@network",
            utils: "@/utils",
            views: "@/views",
          },
        },
      },

}