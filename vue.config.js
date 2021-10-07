module.exports = {
    publicPath:'./',
    // chainWebpack:config => {
    //     config.when(process.env.NODE_ENV === 'production',config => {
    //         config.entry('app').clear().add('./src/main-prod.js')
    //         config.set('externals',{
    //             vue:'Vue',
    //             'vue-router':'VueRouter',
    //             axios:'axios'
    //         })
    //     })

    //     config.when(process.env.NODE_ENV === 'development',config => {
    //         config.entry('app').clear().add('./src/main-dev.js')
    //     })
    // }
}