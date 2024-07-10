import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: 'ibody.icu',
    cacheDir: './node_modules/vitepress_cache',
    description: '爱护身体，远离 icu；分享关于健康的种种知识',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/category' },
            { text: 'Tags', link: '/tags' },
            { text: 'About', link: '/about' }
        ],
        search: {
            provider: 'local',
        },
        outlineTitle: '文章摘要'
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
