$(function(){

    $('#s-actionBar-container .buy').on('click',()=>{
        alert('点击枪火')
    });

    window.setTimeout(triggle,1000)


    function triggle(){
        $('#s-actionBar-container .buy ').trigger('click')
    }
})
