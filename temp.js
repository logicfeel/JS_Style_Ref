var orgJson = {
    tables : [                      // * 필수
        {
            name: "body",           // * 필수
            colume :[               // * 필수
                {
                    name: "key1",
                    type: String,
                    title: "이름"
                },
                {
                    name: "key2",
                    type: Number,
                    title: "제목"
                }
            ]
        },
        {
            name: "body",
            colume :[
                {
                    name: "key1",
                    type: String,
                    title: "설명"
                },
                {
                    name: "key2",
                    type: Number,
                    title: "조회수"
                }
            ]
        }
    ],
    dataRow : {                     // * 필수
        "head": [
            ["이름", "제목"]
        ],        
        "body": [
            ["AAA1", "제목입니다.1"],
            ["AAA2", "제목입니다.2"]
        ]      
    }
};
