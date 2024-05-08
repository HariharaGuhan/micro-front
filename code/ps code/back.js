const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "zxzx6786",
    database : "crud_app"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.get('/Checkstatus',(request,response)=>{

    

    let sql = 'select * from regstatus';

    c.query(sql,(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let status = result[0].regstate;
            let s = {"status":status};
            response.send(s);
        }
    })
})
// app.get('/checkusername',(request,response)=>{

//     let {username}=request.body;
//     let sql2='select * from signup where username=?';
//     c.query(sql2,[username],(error2,result2)=>{
//         if(error2){
//             let s={"status":"error"}
//             response.send(s);
//         }
//         else if(result2.length>0){
//             let s={"status":"0"}
//             response.send(s);
//         }
//         else {
//             let s={"status":"Registered"}
//             response.send(s);
//         }
//     })
    
// })

app.post('/Registration',(request,response)=>{
    let {username,password,name,fathername,date_of_birth,email,phone} = request.body;

    let sql = 'insert into signup(username,password,name,fathername,date_of_birth,email,phone,status) values (?,?,?,?,?,?,?,?)';

    let sql1 = 'update regstatus set regstate=?';

    // let sql2='select * from signup where username=?';
    // c.query(sql2,[username],(error2,result2)=>{
    //     if(error2){
    //         let s={"status":"error"}
    //         response.send(s);
    //     }
    //     else if(result2.length>0){
    //         let s={"status":"error"}
    //         response.send(s);
    //     }
    //     else {
    //         let s={"status":"Registered"}
    //         response.send(s);
    //     }
    // })
    

    c.query(sql1,[1],(error1,result1)=>{})

    c.query(sql,[userid,username,password,name,fathername,date_of_birth,email,phone,0],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})

app.post('/Signin',(request,response)=>{
    let {username,password} = request.body;
    let sql = 'select * from signup where username=?';

    c.query(sql,[username],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else if(result.length > 0){

            let id = result[0].id;
            
            let username1 = result[0].username;
            let password1 = result[0].password;
            if(username1 == username && password1 == password){
                let s = {"status":"Success","userid":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s ={"status":"final_error"};
            response.send(s);
        }
    })

})

app.get('/View_par_user/:uu',(request,response)=>{
    let {uu} = request.params;
    let sql = 'select * from signup where id=?';

    c.query(sql,[uu],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = result[0].name;    
            let s = {"status":name};
            response.send(s);
        }
    })

})

app.get('/Get_userdetails/:uu',(request,response)=>{
    let {uu} = request.params;
    

    let sql = 'select * from signup where id=?';

    c.query(sql,[uu],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            response.send(result);
        }
    })   
})

app.post('/Add_profilephoto',(request,response)=>{
    let userid = request.body.userid;
    let alt_text = request.body.alt_text;
    let imagefile = request.files.image;
    let filename = imagefile.name;
    let path = __dirname+'/upload/'+imagefile.name;

    let url = 'http://localhost:3017/upload';

    let sql = 'insert into profile(userid,url,filename,alt_text)values(?,?,?,?)';

    c.query(sql,[userid,url,filename,alt_text],(error,result)=>{});

    imagefile.mv(path, function(err) {
        if (err){
          let s = {"status":"error"};
          response.send(s);
        }
        else{
            let s = {"status":"uploaded"};
            response.send(s);
        }
      });

})

app.get('/View_profilephoto',(request,response)=>{
    // let {userid} = request.params;
    let sql = 'select * from profilephoto ';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.post('/Education',(request,response)=>{

    let userid=request.body.userid;
    // let{userid}=request.params;
    let {pgstandard,pginstitute,pglocation,pgpercentage,pgpassing,ugstandard,uginstitute,uglocation,ugpercentage,ugpassing,hscstandard,hscinstitute,hsclocation,hscpercentage,hscpassing,sslcstandard,sslcinstitute,sslclocation,sslcpercentage,sslcpassing} = request.body;

    let sql = 'insert into education(userid,pgstandard,pginstitute,pglocation,pgpercentage,pgpassing,ugstandard,uginstitute,uglocation,ugpercentage,ugpassing,hscstandard,hscinstitute,hsclocation,hscpercentage,hscpassing,sslcstandard,sslcinstitute,sslclocation,sslcpercentage,sslcpassing) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';


  

    c.query(sql,[userid,pgstandard,pginstitute,pglocation,pgpercentage,pgpassing,ugstandard,uginstitute,uglocation,ugpercentage,ugpassing,hscstandard,hscinstitute,hsclocation,hscpercentage,hscpassing,sslcstandard,sslcinstitute,sslclocation,sslcpercentage ,sslcpassing],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})
// app.get('/View_education/:userid',(request,response)=>{
//     let {userid} = request.params;
//     let sql = 'select * from education where userid=?';
//     c.query(sql,[userid],(error,result)=>{
//         if(error){      
//             response.send(error);
//         }
//         else{
//             response.send(result);
//         }
//     })
// })
app.post('/Experience',(request,response)=>{
    let {userid} = request.body;
    let {job,years} = request.body;

    let sql = 'insert into exp(userid,job,years) values (?,?,?)';

    c.query(sql,[userid,job,years],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})
app.post('/Skills',(request,response)=>{
    let {userid} = request.params;
    let {html,css,javascript,bootstrap,reactjs,nodejs,corejava,mysql} = request.body;

    let sql = 'insert into skills(userid,html,css,javascript,bootstrap,reactjs,nodejs,corejava,mysql) values (?,?,?,?,?,?,?,?,?)';

    c.query(sql,[userid,html,css,javascript,bootstrap,reactjs,nodejs,corejava,mysql],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })                      

})
app.post('/Certificate',(request,response)=>{
    var userid = request.body.userid;
    var alt = request.body.alt;
    
    var imagefile = request.files.image;
    var filename = imagefile.name;
    var path = __dirname+ '/Files/' + imagefile.name;


    var url= 'http://localhost:3017/Files';

    var sql='insert into certification(userid,url,filename,alt) values(?,?,?,?)';

    c.query(sql,[userid,url,filename,alt],(error,result)=>{});
    imagefile.mv(path,function(err){
        if(err){
            console.log(err)
            let s={'status':'error'};
            response.send(s);
        }
        else{
            let s={'status':'upload'};
            response.send(s);
        }
    })


})
app.get('/View_certificate/',(request,response)=>{
    
    let sql = 'select * from certification';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
app.get('/View_exp/',(request,response)=>{
    
    let sql = 'select * from exp';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
app.listen(3017, ()=>{console.log('Port number running in 3017')});