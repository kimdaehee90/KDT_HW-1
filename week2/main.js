// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];
  
// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount)

const msg = item ? 
`${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
'살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount){
    // 상품을 구입하지 못하는 경우, 금액비교가 필요한 경우, 금액비교가 필요하지 않은 경우로 분리 
    // amount가 500 미만일 경우 null 리턴
    if(amount<500){
        return null;
    } else if (amount < 4000) {
        //data배열을 price에 따라 정렬
        let keysSorted =[]; 
        keysSorted = data.sort(function(a,b){
        return a.price - b.price;
        });
        //amount보다 높은 price를 가진 상품의 index 찾기
        const over_price_index = keysSorted.findIndex(
        a => a.price - amount > 0
        );
        //amount로 살 수 있는 가장 비싼 상품의 index찾기
        const index = over_price_index -1;
        //amount로 살 수 있는 가장 비싼 상품을 리턴하기
        const obj_find = keysSorted[index];
        return obj_find;
    } else {
        //amount가 4000이상일 경우 가장 비싼 상품을 리턴하기
        return data[4];
    }
} 
