package cn.jfinalbbs.user;

import cn.weibo.org.json.JSONException;
import com.qq.connect.utils.json.JSONObject;

import java.util.Date;

/**
 * Created by Jingcheng Jin on 2015/8/10.
 */
public class WebUser {
    /**
     *
     */
    private static final long serialVersionUID = -6570157644351725880L;

    // id
    private String id;

    // 用户名
    private String userId;

    // 第三方账户
    private String thirdAccount;

    // 邮箱
    private String email;

    // 密码
    private String password;

    // 真实姓名
    private String realName;

    // 昵称
    private String nickName;

    // 性别
    private String sex;

    // 生日
    private Date birthday;

    // QQ账号
    private String qqNo;

    // 微博账号
    private String weiboNo;

    // 手机号
    private String mobile;

    // 出借人电话号
    private String tel;

    // 证件类型
    private String certificateType;

    // 证件号
    private String certificateNo;


    // 家庭住址
    private String homeAddress;

    // 头像
    private String photo;

    // 认证时间
    private Date authTime;


    public WebUser(
            String id,
            String userId,
            String thirdAccount,
            String email,
            String password,
            String realName,
            String nickName,
            String sex,
            Date birthday,
            String qqNo,
            String weiboNo,
            String mobile,
            String tel,
            String certificateType,
            String certificateNo,
            String homeAddress,
            String photo,
            Date authTime) {
        this.id = id;
        this.userId = userId;
        this.thirdAccount = thirdAccount;
        this.email = email;
        this.password = password;
        this.realName = realName;
        this.nickName = nickName;
        this.sex = sex;
        this.birthday = birthday;
        this.qqNo = qqNo;
        this.weiboNo = weiboNo;
        this.mobile = mobile;
        this.tel = tel;
        this.certificateType = certificateType;
        this.certificateNo = certificateNo;
        this.homeAddress = homeAddress;
        this.photo = photo;
        this.authTime = authTime;
    }

    public WebUser(JSONObject json) throws JSONException{
        if(json != null){
            try {
                id = json.getString("id");
                userId = json.getString("userId");
                thirdAccount = json.getString("thirdAccount");
                email = json.getString("email");
                password = json.getString("password");
                realName = json.getString("realName");
                nickName = json.getString("nickName");
                sex = json.getString("sex");
//                birthday = json.get("birthday");
                qqNo = json.getString("qqNo");
                weiboNo = json.getString("weiboNo");
                mobile = json.getString("mobile");
                tel = json.getString("tel");
                certificateType = json.getString("certificateType");
                certificateNo = json.getString("certificateNo");
                homeAddress = json.getString("homeAddress");
                photo = json.getString("photo");
//                authTime = json.getString("authTime");
            }catch (Exception e){
               e.printStackTrace();
            }
        }


    }

    /**
     * @return id id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id
     *            id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * @return userId 用户名
     */
    public String getUserId() {
        return userId;
    }

    /**
     * @param userId
     *            用户名
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * @return thirdAccount 第三方账户
     */
    public String getThirdAccount() {
        return thirdAccount;
    }

    /**
     * @param thirdAccount
     *            第三方账户
     */
    public void setThirdAccount(String thirdAccount) {
        this.thirdAccount = thirdAccount;
    }

    /**
     * @return email 邮箱
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     *            邮箱
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return password 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     *            密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return realName 真实姓名
     */
    public String getRealName() {
        return realName;
    }

    /**
     * @param realName
     *            真实姓名
     */
    public void setRealName(String realName) {
        this.realName = realName;
    }

    /**
     * @return nickName 昵称
     */
    public String getNickName() {
        return nickName;
    }

    /**
     * @param nickName
     *            昵称
     */
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    /**
     * @return sex 性别
     */
    public String getSex() {
        return sex;
    }

    /**
     * @param sex
     *            性别
     */
    public void setSex(String sex) {
        this.sex = sex;
    }

    /**
     * @return birthday 生日
     */
    public Date getBirthday() {
        return birthday;
    }

    /**
     * @param birthday
     *            生日
     */
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    /**
     * @return qqNo QQ账号
     */
    public String getQqNo() {
        return qqNo;
    }


    /**
     * @param qqNo
     *            QQ账号
     */
    public void setQqNo(String qqNo) {
        this.qqNo = qqNo;
    }

    /**
     * @return weiboNo 微博账号
     */
    public String getWeiboNo() {
        return weiboNo;
    }

    /**
     * @param weiboNo
     *            微博账号
     */
    public void setWeiboNo(String weiboNo) {
        this.weiboNo = weiboNo;
    }

    /**
     * @return mobile 手机号
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * @param mobile
     *            手机号
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    /**
     * @return tel 出借人电话号
     */
    public String getTel() {
        return tel;
    }

    /**
     * @param tel
     *            出借人电话号
     */
    public void setTel(String tel) {
        this.tel = tel;
    }

    /**
     * @return certificateType 证件类型
     */
    public String getCertificateType() {
        return certificateType;
    }

    /**
     * @param certificateType
     *            证件类型
     */
    public void setCertificateType(String certificateType) {
        this.certificateType = certificateType;
    }

    /**
     * @return certificateNo 证件号
     */
    public String getCertificateNo() {
        return certificateNo;
    }

    /**
     * @param certificateNo
     *            证件号
     */
    public void setCertificateNo(String certificateNo) {
        this.certificateNo = certificateNo;
    }



    /**
     * @return homeAddress 家庭住址
     */
    public String getHomeAddress() {
        return homeAddress;
    }

    /**
     * @param homeAddress
     *            家庭住址
     */
    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    /**
     * @return photo 头像
     */
    public String getPhoto() {
        return photo;
    }

    /**
     * @param photo
     *            头像
     */
    public void setPhoto(String photo) {
        this.photo = photo;
    }

    /**
     * @return authTime 认证时间
     */
    public Date getAuthTime() {
        return authTime;
    }

    /**
     * @param authTime
     *            认证时间
     */
    public void setAuthTime(Date authTime) {
        this.authTime = authTime;
    }

}
