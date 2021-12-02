var app = new Vue({
    el: '.app',
    data() {
        return {
            name: '', //姓名
            sex: '', //性别
            id: '', //身份证号
            disease: '', //既往病史
            homeaddress1: '', //户籍地址
            homeaddress2: '', //户籍地址
            homeaddress3: '', //户籍地址
            liveaddress: '', //详细居住地址
            goodmanname: '', //家长姓名
            goodmannum: '', //家长手机号
            school: '', //初中就读学校
            schooladdress1: '', //初中学籍地址
            schooladdress2: '', //初中学籍地址
            schooladdress3: '', //初中学籍地址
            artscore: '', //中考美术成绩
            culturalscore: '', //中考文化成绩
            artid: '', //中考美术准考证号
            culturalid: '', //中考文化课准考证号
            kwbname: '', //美术学习课外班名称
            teachername: '', //美术课外班教师姓名
            teachernum: '', //美术课外班教师电话
            resulttext: '',
            formRules: {
                accountNumber: [
                    { required: true, validator: name, trigger: "blur" }
                ]
            }



        }
    },
    methods: {
        fletter: function(value, whether, message) {
            if (value.length > 0) {
                var regPos = /^\d+(\.\d+)?$/; //非负浮点数
                var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
                if (!(regPos.test(value) || regNeg.test(value))) {
                    return true;
                } else {
                    this.resulttext = `${message}格式有误!`;
                    return false;
                }
            } else {
                if (!whether) {
                    this.resulttext = `${message}不可为空！`;
                }
                return whether;
            }
        },
        fnumber: function(value, whether, message) {
            if (value.length > 0) {
                var regPos = /^\d+(\.\d+)?$/; //非负浮点数
                var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
                if (regPos.test(value) || regNeg.test(value)) {
                    return true;
                } else {
                    this.resulttext = `${message}格式有误!`;
                    return false;
                }
            } else {
                if (!whether) {
                    this.resulttext = `${message}不可为空！`;
                }
                return whether;
            }
        },
        fisphonenum: function(value, whether, message) {
            if (value.length > 0) {

                var regex = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/;
                if (regex.test(value)) {
                    return true;
                } else {
                    this.resulttext = `${message}格式有误!`;
                    return false;
                }

            } else {
                if (!whether) {
                    this.resulttext = `${message}不可为空！`;
                }
                return whether;
            }

        },
        fid: function() { 
            if (this.id.length > 0) {
                const regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
                if (regIdCard.test(this.id)) {
                    if (this.id.length == 18) {
                        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10,
                            5, 8, 4, 2); // 将前17位加权因子保存在数组里
                        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
                        var idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
                        for (var i = 0; i < 17; i++) {
                            idCardWiSum += this.id.substring(i, i + 1) * idCardWi[i];
                        }

                        var idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
                        var idCardLast = this.id.substring(17); // 得到最后一位身份证号码

                        // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                        if (idCardMod == 2) {
                            if (idCardLast == "X" || idCardLast == "x") {
                                //alert("恭喜通过验证啦！");
                                return true;
                            } else {
                                this.resulttext = '身份证格式有误!';
                                return false;
                            }
                        } else {
                            // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                            if (idCardLast == idCardY[idCardMod]) {
                                //alert("恭喜通过验证啦！");
                                return true;
                            } else {
                                this.resulttext = '身份证格式有误!';
                                return false;
                            }
                        }
                    } else {
                        return true;
                    }
                } else {
                    this.resulttext = '身份证格式有误!';
                    return false;
                }
            } else {
                this.resulttext = '身份证不可为空！';
                return false;
            }
        },
        fresult: function() {
            if (this.fletter(this.name, false, '姓名') &&
                this.fid() &&
                this.fletter(this.disease, false, '既往病史') &&
                this.fletter(this.homeaddress3, false, '户籍地址') &&
                this.fletter(this.liveaddress, false, '详细居住地址') &&
                this.fletter(this.goodmanname, true, '家长姓名') &&
                this.fisphonenum(this.goodmannum, true, '家长手机号') &&
                this.fletter(this.school, false, '初中就读学校') &&
                this.fletter(this.schooladdress1, false, '初中学籍地址') &&
                this.fnumber(this.artscore, false, '中考美术成绩') &&
                this.fnumber(this.culturalscore, false, '中考文化成绩') &&
                this.fnumber(this.artid, false, '中考美术准考证号') &&
                this.fnumber(this.culturalid, false, '中考文化课准考证号') &&
                this.fletter(this.kwbname, true, '美术学习课外班名称') &&
                this.fletter(this.teachername, true, '美术课外班教师姓名') &&
                this.fisphonenum(this.teachernum, true, '美术课外班教师电话')) {
                return true;
            } else {
                return false;
            }
        },
        useaxios: function() {
            var that = this;
            var schooladdress = `${this.schooladdress1}${this.schooladdress2}${this.schooladdress3}`;
            var homeaddress = `${this.homeaddress1}${this.homeaddress2}${this.homeaddress3}`
            var params = new URLSearchParams();
            params.append('name', that.name);
            params.append('sex', that.sex);
            params.append('id', that.id);
            params.append('disease', that.disease);
            params.append('homeaddress', homeaddress);
            params.append('liveaddress', that.liveaddress);
            params.append('goodmanname', that.goodmanname);
            params.append('goodmannum', that.goodmannum);
            params.append('school', that.school);
            params.append('schooladdress', schooladdress);
            params.append('artscore', that.artscore);
            params.append('culturalscore', that.culturalscore);
            params.append('artid', that.artid);
            params.append('culturalid', that.culturalid);
            params.append('kwbname', that.kwbname);
            params.append('teachername', that.teachername);
            params.append('teachernum', that.teachernum);
            if (this.fresult()) {
                var r = confirm("请检查填写信息是否正确！");
                if (r == true) {
                    axios.post("./json", params).then(function(response) {
                            console.log(response);
                        },
                        function(err) {
                            alert('提交失败！')
                            console.log(err);
                        })
                }

            } else {
                alert(this.resulttext);
            }
        }
    },
})