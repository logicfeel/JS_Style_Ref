
// [ 자바스크립트 스타일 가이드 ] 
// "읽기 좋은 코딩 기법" -한빛 참조-



// ##########################################################
// 들여쓰기
//      - 기본 : 4개 공백  (추천)

// ##########################################################
// 줄 길이
/*
    - 기본 : 최대 80자
    - 더 길면 (콤마, 더기기 기호 등) 이후 줄 바꿈
*/
var str;
str = "상위줄" +
    "하위줄";

// 나쁨 : 다음줄로 이어짐
str = "상위줄 \
    하위줄";

str = "하위줄";
str += "상위줄";

func(a, b, c,
        d, e);   // * 길이가 길 경우 2단계 들여쓰기 (8공백)

var abc = "aaa" + "bbb" + "ccc" +
          "ddd" + "eee";    // * 변수 삽입이 길 경우 앞줄에 맞춤


// ##########################################################
// 기본 리터럴
/*
    - 기본 : 문자열은 큰따움표
    - 확인! : '' 작은 따움표가 유리한 경우
*/
var name = "Neo Kim";

// ##########################################################
// null 값 사용할 경우 (**)
/*      
    1. 객체값을 나중에 할당할 변수를 초기화 할 때 : var parson = null;
    2. 초기화된 변수에 객체 값이 할당되었는지 비교할 때 : if (parson === null)
    3. 객체를 인자로 넘겨야 하는 함수를 호출할 때 :  if (getSum() !== null )
    4. 함수에서 객체를 반환해야 할 때 : return null // 없을시
    * (null == undefined) => trun 임 주의!
*/
// 나쁨 : 인자를 넘김 여부를 비교, !== 연산자 사용 안함
if (arg2 != null);

// ##########################################################
// undefined 값 사용할 경우 (**) : 
/*
    - 절대 사용 안함 !!
    - 필요시 typeof 연산자 사용
*/
if (typeof variable === "undefined");

// 나쁨 : undefined 사용
if (typeof variable === undefined);

// ##########################################################
// 연산자에 공백 넣기
/*
    - 연산자와 피연산자 사이에 공백 넣기
    - 연산자 : = , ===, &&, <, 
    - 예외 : ++ 증감, --감소연산자는 붙임
*/
var abc = aaa + bbb;

value[0] === item;

for(i = 0; i < 10; i++);

// ##########################################################
// 괄호에 공백 넣기
/*
    - 괄호 앞과 뒤는 공백을 없애기
*/
function func(a, b) {}

if (a < b)

// 나쁨 : 인자 안에 불필요한 공백 넣음
process( i );

// ##########################################################
// 객체 리터럴
var object = {              // 중괄호는 열면 다음줄 삽입
    key1: value1,           // (,컴마)는 줄에 붙여서 삽입
    // <- 빈줄 삽입
    func: function() {      // 함수 앞뒤에 빈줄 삽입 (예외?)
        // ...
    },
    // <- 빈줄 삽입
    key2: value2            // 프로퍼티 구분자는 :는 key 앞에 붙임
}                           // 닫는 중괄호는 별도 줄에 삽입

// ##########################################################
// 주석
/*
    - 이해하기 어려운 코드
    - 에러로 오해하기 쉬운 코드
    - 로직이 명확하지 않은 코드 (특정 브라우저 코드)
    - 문서 생성에 필요한 객체, 메소드, 프로퍼티
*/

// ##########################################################
// 한줄 주석
/*
    - 상단 주석 : 하단의 코드를 설명하기 위한 독립된 줄에 주석을 작성
        + 상단주석 앞은 빈줄 삽입
    - 끝 주석 : 주석 앞의 코드를 설명하기 위해 작성
        + 코드와 주석 사이 들여쓰기 삽임
    - 여러줄 주석 : 상단주석을 여러줄로 작성
    * 주석 작성시 들여쓰기를 맞춤
    장점 : 디버깅시 블럭 주석 + 한줄 주석을 모두 처리 가능함
*/
function abc() {
    
    // 상단주석 위치
    var aObj = null;
}

var result  = some + thing;     // 끝주석 위치

// if (abc) {  // 여러줄 주석 위치
//     var kk = null;
// }

// ##########################################################
// 여러 줄 주석 (블럭 주석)

// 방법 1
/*
* 공백을 삽입하고 주석을 삽입
* 단점 : 들여쓰기의 단점
*/

// 방법 2
/*
    장점 : 툴에서 자동 들여쓰기의 장점이 있음
*/

// ##########################################################
// 주석 이노테이션
/*
    - TODO : 코드가 다 작성되지 않음
    - HACK : 임시 방법(펀법)
    - XXX : 코드에 문제가 있어서 가능한 빨리 처리해야 함
    - FIXME : 코드에 문제가 있어서 수정 해야함
    - REVIEW : 변경가능하여 리뷰(다시볼) 필요가 있는 코드
    * 다른 의미로 정해서 사용해도 될듯
    - IDEA : 업무프로세서, 개발(코딩) 관점에서 아이디어
*/

// ##########################################################
// 변수 선언 
/*
    - 위치는 해당 스코프 의 최상위에 선언(함수 맨 앞 등)
    - 이름 : 명사로 정의
*/
// 방법 1
var count   = 10,   // (=) 옆에 간격 맞춤
    name    = "Neo",
    object  = null;

// 방법 2
var count   = 10;
var name    = "Neo";
var obj     = null;

// ##########################################################
// 함수 선언
/*
    - 객체의 메소드가 아니면 표현식으로 표현 안함
    - 첫글자는 소문자 (클래스형은 대문자로)
    - 이름 : 시작문장 동사로 사작
*/
function doSome(arg1, arg2) {   // 함수명과 ()는 붙임, 블럭은 공백 추가
    
    var obj = null;

    function doInner() {        // 내부 함수도 변수 다음에 선언
    }
}

// ##########################################################
// 이름 규칙
/*
    - 변수 : 낙타표기법, _ 또는 소문자로 시작 이후 영문/숫자
        + 특수문자 사용금지
        + 시작문자 : 명사로 시작 (동사로 시작 금지 get, set..)
        + 문자 구문자 :  낙타표기법 (_언더바) 사용 안함
    - 생성자(클래스) 함수 : 대문자로 시작
        + 명사, 대문사로 시작 (동사 금지)
        + 동사 종류 : can -> bool, has -> bool, is -> bool, get, set
        + (예외) attr : set, get 동시
    - 상수 : 모두 대문자
        + 문자 구문자 : (_언더바)로 표기
    - private (프로퍼티/메소드) 객체 : (_언더바)로 시작
*/

// ##########################################################
// strict 모드
'use strict';
/*
    - 전역 사용 금지
    - 함수나 IIFE 해당 스코프 최상단에 정의
*/

// ##########################################################
// 할당
/*
    - 할당값 뒤이 비교 연산식 이면 ()괄호로 묶음
*/
var bool = (a > b);

// ##########################################################
// 동등 연산자
if (a === b);   // (a!= b) 방식 사용 안함
if (a !== b);

// ##########################################################
// 삼항 연산자
/*
    - 조건에 따른 대입문에만 사용
    - 복잡한 구문을 단순화 할 때 (특별한 경우)
*/
var value = condition ? value1 : value2;

// ##########################################################
// 간단한 문장
//  - 문장은 반드시 (;세미콜론)으로 마침

// ##########################################################
// return 문
return null;    // 객체를 기대에 대한 실패값

return {        // 객체형 전달 (함수형 방식에 이용)
    abc: "Names"
}

return (size > 0 ? size : -1);  // 특별한 경우는 괄호로 묶음

// ##########################################################
// 복합문

// ##########################################################
// if 문
if (cond) {
    // ..
} else if (cond) {
    // ..
}

if (cond) {
    // ..
}else{
    // ..
}

// ##########################################################
// for 문
var i, len;

for (i = 0, len = 10; i < len; i++){    // 선언부 호이스트됨
    // ..  단점 : 블럭 주석 처리, 블럭 복사시 2번 작업
}

for (var prop in object) {
    // 객체 순회에만 이용 (배열에선 사용 안함)
    // object.hasOwnProperty(prop) 로 자식것을 걸러내는데 이용
}

// ##########################################################
// while 문
while (cond) {
    // ..
}

// ##########################################################
// do 문
do {
    // ..
} while (cond);

// ##########################################################
// switch 문
//  - defaut: 를 제외한 모든 case는 (return | break | throw )로 종료
//  - case:에 의도적으로 break; 를 제외 할 경우 주석 표시 (에러 오해 해소)
switch (abc) {
    case 1:
        doSomethig();
        break;
    case 2:
        return true;
    default:
        throw new Error('에러 발생');
}

// ##########################################################
// try 문
try {           // 예외 검사 블럭
    // ..
} catch (e) {   // 예외시 처리
    // 에러 메시지, 에러 처리
} finally {     // 항상 처리, 제외 가능
    // .. 객체 닫기 등
}

// ##########################################################
// 공백
/*
    - 빈줄 2개 : 
        + 소스 파일 부분 사이
        + 클래스와 인터페이스 정의 사이
    - 빈줄 1개 :
        + 메서드 사이 (* 예외 필요함)
        + 메서드와 프로퍼티 사이
        + 한줄 주석 이전
        + 메서드 내에서 가독성 향상 및 논리적으로 나눈 그룹 사이
        + (선택) 조건과 시작 앞줄
*/
if (conf) {

    while (conf) {      // (선택) 조건블럭은 앞줄을 공백
        // ..
    }
}

// ##########################################################
// 유의사항
/*
    - String, Number는 사용 자재 (특별한 용도에만 사용)
    - eval() 절대 사용 금지
    - with 문 사용 금지 (ECMAScript 에서 중단 예정)
*/

// ##########################################################
// VS code 예약어
//  - shift + tab  들여쓰기



