
// import cloudinary from "cloudinary";
import { createRequire} from "module";
const require = createRequire(import.meta.url)
const cloudinary = require("cloudinary").v2;


  cloudinary.config({
    api_key:"711397371276342",
    api_secret:"yH3WT36KhWxSYO46MNBmofPU0ws",
    cloud_name:"protapbairagi"
})

export default cloudinary

// cloudinary.config({
//     api_key:"711397371276342",
//     api_secret:"fgbO2-yH3WT36KhWxSYO46MNBmofPU0ws",
//     cloud_name:"protapbairagi",
//     secure:true
// })

// cloudinary.v2.config({
//     api_key: '965455779834431',
//     api_secret:'fgbO2-odPxCQtl1ZQi1eFmSNfZU',
//     cloud_name:'pratap'
// })

// cloudinary.v2.config({
//     api_key: '711397371276342',
//     api_secret:'yH3WT36KhWxSYO46MNBmofPU0ws',
//     cloud_name:'protapbairagi'
// })
// cloud.v2.config({
//     api_key: '965455779834431',
//     api_secret:'fgbO2-odPxCQtl1ZQi1eFmSNfZU',
//     cloud_name:'pratap'
// })

// export default cloudinary