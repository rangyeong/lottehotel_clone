// script.js

// * 문서 전체 클릭 이벤트
$(document).click(function(e){
    let target = $(e.target);
    if(!target.closest('.msr6_lang').length){
        $('.msr6_lang_list').stop().slideUp();
        $('.msr6_lang .current').removeClass('on');
    }
    if(!target.closest('.msr6_currency').length){
        $('.msr6_currency_list').stop().slideUp();
        $('.msr6_currency .current').removeClass('on');
    }
    if(!target.closest('.h_utill_select').length){
        $('.h_utill_select > div').hide();
    }
});

// * 브라우저 크기 변경 이벤트
$(window).resize(function(){
    moSideScroll();
    locationListScroll();
    msr5H();
});

// * 탑배너 닫기
$('.tb_close').click(function(){
    $('#topBn').stop().animate({marginTop:-39});
});

// * 모바일 - gnb(아코디언)
$('.mo_gnb .d1 button').click(function(e){
    e.preventDefault();
    let dis = $(this).parent('.d1').siblings('.depth2').css('display');
    if(dis == 'none'){
        $('.mo_gnb .d1 button').removeClass('active');
        $('.mo_gnb .depth2').stop().slideUp();
        $(this).addClass('active');
        $(this).parent('.d1').siblings('.depth2').slideDown(function(){
            moSideScroll();
        });
        
    } else {
        $('.mo_gnb .d1 button').removeClass('active');
        $('.mo_gnb .depth2').stop().slideUp(function(){
            moSideScroll();
        });
    }
});

// * 모바일 예약 폼 - 열기
$('.mside_row3, .h_search_mo a').click(function(e){
    e.preventDefault();
    $('.modal_reserve').stop().fadeIn();
    $('.modal_reserve .top .select_hotel input').focus();
});

// * 모바일 예약 폼 - 닫기
$('.modal_reserve .close').click(function(e){
    e.preventDefault();
    $('.modal_reserve').stop().fadeOut();
});

// * 모바일 예약 폼 - 호텔 리스트
$('.location_list > ul > li > a').click(function(e){
    e.preventDefault();
    let dis = $(this).siblings('.depth2').css('display');
    if(dis == 'none'){
        $('.location_list > ul > li').removeClass('active');
        $('.location_list .depth2').stop().slideUp();
        $(this).parents('li').addClass('active');
        $(this).siblings('.depth2').slideDown(function(){
            locationListScroll();
        });
    } else {
        $('.location_list > ul > li').removeClass('active');
        $('.location_list .depth2').stop().slideUp(function(){
            locationListScroll();
        });
    }
});

//  * 모바일 사이드 스크롤바
function moSideScroll(){
    let moSideH = $('#mo_side').height();
    let moSideInH = $('.mo_side_in').height();
    if(moSideH >= moSideInH){
        $('#mo_side').css('overflow-y', 'visible');
    } else {
        $('#mo_side').css('overflow-y', 'scroll');
    }
};

//  * 모바일 예약 폼 - 호텔 리스트 스크롤바
function locationListScroll(){
    let locationH = $('.location').height();
    let locationInH = $('.location_in').height();
    if(locationH >= locationInH){
        $('.location').css('overflow-y', 'visible');
    } else {
        $('.location').css('overflow-y', 'scroll');
    }
}

// * 모바일 사이드 - .mside_row5의 최소높이값
function msr5H(){
    let winH = $(window).height();
    let msr1H = $('.mside_row1').innerHeight();
    let msr2H = $('.mside_row2').innerHeight();
    let msr3H = $('.mside_row3').innerHeight();
    let msGnbH = $('.mo_gnb').innerHeight();
    let msBtH = $('.mside_bottom').innerHeight();
    $('.mside_row5')
    .css('min-height', winH - (msr1H + msr2H + msr3H + msGnbH + msBtH));
}

// * 모바일 사이드 - 언어, 화폐
$('.msb01 .current').click(function(e){
    e.preventDefault();
    $(this).siblings('div').stop().slideToggle();
    $(this).toggleClass('on');
});

// * 모바일 사이드 열기
$('.open_menu a').click(function(e){
    e.preventDefault();
    $('#mo_side').stop().animate({left : 0});
    $('.mside_close').stop().animate({left : 0});
    msr5H();
    $('body').css({overflow : 'hidden'});
});

// * 모바일 사이드 닫기
$('.mside_close a').click(function(e){
    e.preventDefault();
    $('#mo_side').stop().animate({left : '100%'});
    $('.mside_close').stop().animate({left : '100%'});
    $('body').css({overflow : 'visible'});
});

// 헤더1 PC 선택메뉴 복사
$('.h_lang_list').html($('.msr6_lang_list ul').clone());
$('.h_currency_list').html($('.msr6_currency_list ul').clone());

// 헤더1 PC 언어, 통화 선택
$('.h_utill_select .default').click(function(e){
    e.preventDefault();
    let d = $(this).siblings('div').css('display');
    if(d == 'none'){
        $('.h_utill_select > div').hide();
        $(this).siblings('div').show();
    } else {
        $(this).siblings('div').hide();
    }    
});

// PC - 헤더 - 예약폼 열고 닫기
$('.btn_open_reserve a').click(function(e){
    e.preventDefault();
    $('.h_reserve').slideToggle();
});
$('.hr_hide').click(function(e){
    e.preventDefault();
    $('.h_reserve').slideUp();
});

// PC - 헤더 gnb
$('.pc_gnb').html($('.mo_gnb > ul').clone());

$('.pc_gnb .has').mouseover(function(){
    $('.pc_gnb .depth2').stop().slideUp();
    $(this).find('.depth2').stop().slideDown();
}).mouseout(function(){
    $('.pc_gnb .depth2').stop().slideUp();
});