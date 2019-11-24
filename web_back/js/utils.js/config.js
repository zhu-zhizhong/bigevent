// 接口基地地址
var baseUrl = 'http://localhost:8000'
// 把所有的接口集中管理
var APIURLS = {
    
    user_login: baseUrl + '/admin/login',
    user_logout: baseUrl + '/admin/logout',
    user_getInfo: baseUrl + '/admin/getuser',
    
    category_show: baseUrl + '/admin/category_search',
    category_del: baseUrl + '/admin/category_delete',
    category_add: baseUrl + '/admin/category_add',
    category_edit: baseUrl + '/admin/category_edit',
    // 文章搜索的地址
    article_show:baseUrl +'/admin/search',
    article_del: baseUrl + 'admin/article_delete'

}
