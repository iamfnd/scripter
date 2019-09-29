import { BTree } from "../common/btree"

type byte = number

// generated by misc/gen-datatype-btree.js
const [fileHeaders, fileExts] = (function() :[BTree<Info>,Map<string,Info[]>] {
  const v0 = {type:"image/png",exts:["png"],description:"PNG image"},
        v1 = {type:"image/gif",exts:["gif"],description:"GIF image"},
        v2 = {type:"image/jpeg",exts:["jpg","jpeg","jfif","jpe"],description:"JPEG image"},
        v3 = {type:"image/jp2",exts:["jp2"],description:"JPEG2000 image"},
        v4 = {type:"image/webp",exts:["webp"],description:"WebP image"},
        v5 = {type:"image/tiff",exts:["tif","tiff"],description:"TIFF image"},
        v6 = {type:"image/bmp",exts:["bmp"],description:"Bitmap image"},
        v7 = {type:"image/x-icon",exts:["ico"],description:"Icon image"},
        v8 = {type:"image/vnd.adobe.photoshop",exts:["psd"],description:"Photoshop image"},
        v9 = {type:"audio/midi",exts:["mid","midi"],description:"MIDI audio"},
        va = {type:"audio/mp3",exts:["mp3"],description:"MP3 audio"},
        vb = {type:"audio/ogg",exts:["ogg"],description:"OGG audio"},
        vc = {type:"audio/wav",exts:["wav"],description:"WAV audio"},
        vd = {type:"audio/m4a",exts:[]},
        ve = {type:"video/x-m4v",exts:["m4v"],description:"MPEG4 video"},
        vf = {type:"video/mp4",exts:["mp4"],description:"MPEG4 video"},
        vg = {type:"application/wasm",exts:["wasm"],description:"WebAssembly module"},
        vh = {type:"application/zip",exts:["zip"],description:"Zip archive"},
        vi = {type:"application/jar",exts:["jar"],description:"Java archive"},
        vj = {type:"application/gzip",exts:["gz"],description:"GZip archive"},
        vk = {type:"application/x-tar",exts:["tar"],description:"TAR archive"},
        vl = {type:"application/x-tar-compressed",exts:["tgz"],description:"Compressed TAR archive"},
        vm = {type:"application/x-bzip2",exts:["bz2"],description:"BZip2 archive"},
        vn = {type:"application/pdf",exts:["pdf"],description:"PDF document"};
  const headers = new BTree<Info>(
    { k: [256,256,256,256,102,116,121,112,70,52,80,32], v: vf,
      L:{ k: [73,68,51], v: va,
        L:{ k: [37,80,68,70], v: vn,
          L:{ k: [0,0,1,0], v: v7,
            L:{ k: [0,0,0,192,106,80,32,32,208,160,135,160,0], v: v3},
            R:{ k: [0,97,115,109,1,0,0,0], v: vg,
              R:{ k: [31,139,8], v: vj,
                R:{ k: [31,157,144], v: vl}}}},
          R:{ k: [66,90,104], v: vm,
            L:{ k: [56,66,80,83], v: v8,
              R:{ k: [66,77], v: v6}},
            R:{ k: [71,73,70,56,55,97], v: v1,
              R:{ k: [71,73,70,56,57,97], v: v1,
                R:{ k: [73,32,73], v: v5}}}}},
        R:{ k: [80,75,3,4,20,0,8,0], v: vi,
          L:{ k: [77,77,0,43], v: v5,
            L:{ k: [73,73,42,0], v: v5,
              R:{ k: [77,77,0,42], v: v5}},
            R:{ k: [77,84,104,100], v: v9,
              R:{ k: [79,103,103,83], v: vb,
                R:{ k: [80,75,3,4], v: vh}}}},
          R:{ k: [82,73,70,70,256,256,256,256,87,65,86,69], v: vc,
            L:{ k: [80,75,5,6], v: vh,
              R:{ k: [80,75,7,8], v: vh}},
            R:{ k: [117,115,116,97,114], v: vk,
              L:{ k: [82,73,70,70,256,256,256,256,87,69,66,80], v: v4},
              R:{ k: [137,80,78,71,13,10,26,10], v: v0,
                R:{ k: [255,216,255], v: v2}}}}}},
      R:{ k: [256,256,256,256,102,116,121,112,78,68,88,80], v: vf,
        L:{ k: [256,256,256,256,102,116,121,112,78,68,83,67], v: vf,
          L:{ k: [256,256,256,256,102,116,121,112,77,52,65], v: vd,
            L:{ k: [256,256,256,256,102,116,121,112,70,52,86,32], v: vf},
            R:{ k: [256,256,256,256,102,116,121,112,77,52,86], v: ve,
              R:{ k: [256,256,256,256,102,116,121,112,77,83,78,86], v: vf,
                R:{ k: [256,256,256,256,102,116,121,112,78,68,65,83], v: vf}}}},
          R:{ k: [256,256,256,256,102,116,121,112,78,68,83,80], v: vf,
            L:{ k: [256,256,256,256,102,116,121,112,78,68,83,72], v: vf,
              R:{ k: [256,256,256,256,102,116,121,112,78,68,83,77], v: vf}},
            R:{ k: [256,256,256,256,102,116,121,112,78,68,88,67], v: vf,
              L:{ k: [256,256,256,256,102,116,121,112,78,68,83,83], v: vf},
              R:{ k: [256,256,256,256,102,116,121,112,78,68,88,72], v: vf,
                R:{ k: [256,256,256,256,102,116,121,112,78,68,88,77], v: vf}}}}},
        R:{ k: [256,256,256,256,102,116,121,112,105,115,111,52], v: vf,
          L:{ k: [256,256,256,256,102,116,121,112,97,118,99,49], v: vf,
            L:{ k: [256,256,256,256,102,116,121,112,78,68,88,83], v: vf,
              R:{ k: [256,256,256,256,102,116,121,112,78,83,68,67], v: vf}},
            R:{ k: [256,256,256,256,102,116,121,112,100,97,115,104], v: vf,
              R:{ k: [256,256,256,256,102,116,121,112,105,115,111,50], v: vf,
                R:{ k: [256,256,256,256,102,116,121,112,105,115,111,51], v: vf}}}},
          R:{ k: [256,256,256,256,102,116,121,112,109,109,112,52], v: vf,
            L:{ k: [256,256,256,256,102,116,121,112,105,115,111,53], v: vf,
              R:{ k: [256,256,256,256,102,116,121,112,105,115,111,54], v: vf,
                R:{ k: [256,256,256,256,102,116,121,112,105,115,111,109], v: vf}}},
            R:{ k: [256,256,256,256,102,116,121,112,109,112,52,50], v: vf,
              L:{ k: [256,256,256,256,102,116,121,112,109,112,52,49], v: vf},
              R:{ k: [256,256,256,256,102,116,121,112,109,112,52,118], v: vf,
                R:{ k: [256,256,256,256,102,116,121,112,109,112,55,49], v: vf}}}}}}})
  const exts = new Map<string,Info[]>([
    ["png",[v0]],
    ["gif",[v1]],
    ["jpg",[v2]],
    ["jpeg",[v2]],
    ["jfif",[v2]],
    ["jpe",[v2]],
    ["jp2",[v3]],
    ["webp",[v4]],
    ["tif",[v5]],
    ["tiff",[v5]],
    ["bmp",[v6]],
    ["ico",[v7]],
    ["psd",[v8]],
    ["mid",[v9]],
    ["midi",[v9]],
    ["mp3",[va]],
    ["ogg",[vb]],
    ["wav",[vc]],
    ["m4v",[ve]],
    ["mp4",[vf]],
    ["wasm",[vg]],
    ["zip",[vh]],
    ["jar",[vi]],
    ["gz",[vj]],
    ["tar",[vk]],
    ["tgz",[vl]],
    ["bz2",[vm]],
    ["pdf",[vn]]
  ]);
  return [headers, exts]
})()
// end of generated code

export interface Info {
  type :string    // mime type
  exts :string[]  // filename extensions
  description? :string
}

export function lookupExt(ext :string) :Info|null {
  let v = fileExts.get(ext.toLowerCase())
  return v ? v[0] : null
}

export function lookupExtAll(ext :string) :Info[] {
  return fileExts.get(ext.toLowerCase()) || []
}

export function lookupHeader(data :ArrayLike<byte>|ArrayBuffer) :Info|null {
  let buf = data instanceof ArrayBuffer ? new Uint8Array(data) : data
  return fileHeaders.getPrefixMatch(buf) || null
}


// ;(function test(){
//   let png = new Uint8Array([
//     0x89, 0x50, 0x4E, 0x47,
//     0x0D, 0x0A, 0x1A, 0x0A,
//        0,    0,    0, 0x0D,
//     0x49, 0x48, 0x44, 0x52,
//        0,    0,    0, 0x80,
//        0,    0,    0, 0x80,
//   ])

//   let gif87 = new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61])
//   let gif89 = new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61])

//   let webp = new Uint8Array([
//     0x52, 0x49, 0x46, 0x46,
//        1,    2,    3,    4, // these four bytes can be anything
//     0x57, 0x45, 0x42, 0x50
//   ])

//   try {
//   console.log("png:", lookupHeader(png))
//   console.log("gif87:", lookupHeader(gif87))
//   console.log("gif89:", lookupHeader(gif89))
//   console.log("webp:", lookupHeader(webp))
//   } catch (e) { console.error("test failed", e.stack) }
// })()
