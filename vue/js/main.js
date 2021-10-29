


    new Vue
    ({
        el: '#app',
        data:{
            value: 1

        },
        methods:
        {
            increment(value)
            {
                this.value = value
                if(value>=25)
                alert("Ой чет дохуя:"+this.value)
            }               
        },
        computed:
        {
            doubleValue()
            {      
                return this.value * 2 
            }
        }
    });

    new Vue({
        el: '#app1',
        data:{
            show: true
        }
    });
    