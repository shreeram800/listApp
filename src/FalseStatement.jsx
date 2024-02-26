export function TrueFalse({hello}){
    return <div>
        {hello!=null && `My fav thing is ${hello}`}
        I say to you is {hello}
    </div>
}
//if code before && is true then it will return code after && else do nothing. It will return 0 on zero because it consider as false