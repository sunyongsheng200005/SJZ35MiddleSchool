var tupiangenghuan = new Vue({
    el: '#tupiangenghuan',
    data() {
        return {
            imgarr: [
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/20173315328249.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/201733145920206.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/201733145558643.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/201733142817140.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/201733144658373.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/20173314437345.jpg'></a>",
                "<a href='' class='modulecenter fl'> <img src='./uploadfile/jpg/2017-3/201733142043836.jpg'></a>",
                // "<a href='' class='modulecenter fl'> <img src='./Images/jsfc/888.jpg'></a>",
            ],
            index: 0,
        }
    },
})

var tupianjianting = new Vue({
    el: '#tupianjianting',
    methods: {
        dolt1: function() {
            tupiangenghuan.index = 0
        },
        dolt2: function() {
            tupiangenghuan.index = 1
        },
        dolt3: function() {
            tupiangenghuan.index = 2
        },
        dolt4: function() {
            tupiangenghuan.index = 3
        },
        dolt5: function() {
            tupiangenghuan.index = 4
        },
        dolt6: function() {
            tupiangenghuan.index = 5
        },
        dolt7: function() {
            tupiangenghuan.index = 6
        }
    },
})


var nowdat = new Vue({
    el: "#nowdateer",
    data() {
        return {
            nowdate: '',

            week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],

        }

    },
    mounted() {
        setInterval(() => {
            this.updateTime()

        }, 1000)

        this.updateTime()

    },

    methods: {
        updateTime() {
            var cd = new Date()
            this.nowdate = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()]
        },
        zeroPadding(num, digit) {
            var zero = ''

            for (var i = 0; i < digit; i++) {
                zero += '0'
            }
            return (zero + num).slice(-digit)

        },
        handleCurrentChange(val) {
            this.currentPage = val
        },
        useaxios: function() {
            var that = this;
            axios.get("url").then(function(response) {
                    console.log(response);
                    that.imgarr = response.data.imgarr;
                },
                function(err) {
                    console.log(err);
                })

        }
    }
})

useaxios();