package cn.jfinalbbs.user;

import cn.jfinalbbs.common.BaseController;
import cn.jfinalbbs.interceptor.AdminUserInterceptor;
import com.jfinal.aop.Before;
import com.jfinal.kit.PropKit;

/**
 * Created by liuyang on 15/4/11.
 */
@Before(AdminUserInterceptor.class)
public class UserAdminController extends BaseController {

    public void index() {
        setAttr("page", User.me.page(getParaToInt("p", 1), PropKit.use("config.properties").getInt("page_size")));
        render("index.html");
    }

}
