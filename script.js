var lowerCount = document.querySelector('.lowerCount');
            var addCount = document.querySelector('.addCount');
            var counter = document.querySelector('.counter');
            var counterShow = parseInt(counter.innerText);
            count=0;
            addCount.addEventListener('click',()=>{
               count++; 
               console.log(counterShow);
               counter.innerText = counterShow + count;
            })
            lowerCount.addEventListener('click',()=>{
                count--;
                var condition = counterShow + count
               
                if(condition <= 0){
                    condition = 0;
                    count = 0;
                    counter.innerText = condition;
                }
                else{
                    counter.innerText = condition;
                }
            }) 
                