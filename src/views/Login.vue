<template>
  <div class="login">
    <div class="login-form">
      <h3>{{ $store.state.lang == "cn" ? "系统登录" : "System Login" }}</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item :label="$store.state.lang == 'cn' ? '账号' : 'account'" prop="count">
          <el-input v-model.number="ruleForm.count"></el-input>
        </el-form-item>
        <el-form-item :label="$store.state.lang == 'cn' ? '密码' : 'password'" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >{{$store.state.lang == 'cn' ? '登录':'Login'}}</el-button
          >
          <el-button @click="resetForm('ruleForm')">{{$store.state.lang == 'cn' ?'重置':'Reset'}}</el-button>
          <el-switch
            v-model="lang"
            inactive-text="CN"
            active-text="EN"
            @change="changeLang"
          >
          </el-switch>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "123456",
        checkPass: "",
        age: "",
        count: "123456"
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.lang == "cn" ? false : true;
      },
      set(val) {
        if (val) {
          this.$store.commit("GET_LANGUAGE", "en");
        } else {
          this.$store.commit("GET_LANGUAGE", "cn");
        }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message("success", "登录成功", 2000);
          this.$router.push({
            path: "/home"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeLang(val) {
      if (val) {
        this.$store.commit("GET_LANGUAGE", "en");
        console.log(this.$store.state.lang)
      } else {
        this.$store.commit("GET_LANGUAGE", "cn");
        console.log(this.$store.state.lang)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("https://tsx-1302788370.file.myqcloud.com/bg.png");
  overflow: hidden;
  background-size: cover;
  .login-form {
    width: 350px;
    background-color: #fff;
    border-radius: 5px;
    //margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 35px 35px 15px;
    h3 {
      text-align: center;
      margin-bottom: 18px;
    }
    /deep/ .el-form {
      .el-form-item__label {
        max-width: 100px;
        width: 55px !important;
        text-align: left;
      }
      .el-form-item__content {
        margin-left: 70px !important;
        .el-switch {
          margin-left: 30px;
        }
      }
    }
  }
}
</style>