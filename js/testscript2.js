function DisplayTime()
     {
        now=new Date();
        localtime = now.toString();
        var display = document.getElementById("timeitem");
        display.innerHTML = "<strong>Local Time:</strong> " + localtime;
     }
    
function SayHello()
    {
        alert("Hello");
    }
    
function AddPicture()
        {
            var image = document.getElementById("picDisplay");
            image.src = "images/sample.jpg";
        }
function RemovePicture()
        {
            var clear = document.getElementById("picDisplay");
            clear.src = "";
        }
function HidePicture()
        {
            var clear = document.getElementById("picDisplay");
            clear.style.visibility = "hidden";
        }
function ShowPicture()
        {
            var clear = document.getElementById("picDisplay");
            clear.style.visibility = "visible";
        }
function CopyText()
        {
            var textitem = document.getElementById("testitem").value;
            document.getElementById("displayitem").innerHTML = textitem;
        }
function Add()
{
   var firstitem = Number(document.getElementById("item1").value);
   var seconditem = Number(document.getElementById("item2").value);
   var result = firstitem + seconditem;
   document.getElementById("result").innerHTML = result;
}
function Subtract()
{
   var firstitem = Number(document.getElementById("item1").value);
   var seconditem = Number(document.getElementById("item2").value);
   var result = firstitem - seconditem;
   document.getElementById("result").innerHTML = result;
}
function Multiply()
{
   var firstitem = Number(document.getElementById("item1").value);
   var seconditem = Number(document.getElementById("item2").value);
   var result = firstitem * seconditem;
   document.getElementById("result").innerHTML = result;
}
function Divide()
{
   var firstitem = Number(document.getElementById("item1").value);
   var seconditem = Number(document.getElementById("item2").value);
   var result = firstitem / seconditem;
   document.getElementById("result").innerHTML = result;
}

function Execute()
        {
            var xmlhttp = new XMLHttpRequest();
            var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getdata/";
            url += document.getElementById("submission").value;
            
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    document.getElementById("demo").innerHTML = output.GetDataResult;
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
          
        }
        
function List()
        {
            var xmlhttp = new XMLHttpRequest();
            var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
             
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    GenerateOutput(output);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function GenerateOutput(result)
            {
            var display = "<table><tr><th>City</th><th>Company Name</th><th>Customer ID</th></tr>";
            var count = 0;
            for(count = 0; count < result.GetAllCustomersResult.length; count ++)
            {
                display += "<tr><td>" + result.GetAllCustomersResult[count].City + "</td><td>" + result.GetAllCustomersResult[count].CompanyName + "</td><td>" + result.GetAllCustomersResult[count].CustomerID + "</td></tr>";
            }
            display += "</table>";
            document.getElementById("listContents").innerHTML = display;
            }
        }
        
function History()
            {
            var xmlhttp = new XMLHttpRequest();
            var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
            url += document.getElementById("submission").value;
                        
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    GenerateOutput(output);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function GenerateOutput(result)
            {
            var display = "<table><tr><th>Product Name</th><th>Total</th></tr>";
            var count = 0;
            for(count = 0; count < result.length; count ++)
            {
                display += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
            }
            display += "</table>";
            document.getElementById("listContents").innerHTML = display;
            }
        }
        
function Orders()
    {
        var xmlhttp = new XMLHttpRequest();
            var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
            url += document.getElementById("submission").value;
                        
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    GenerateOutput(output);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function GenerateOutput(result)
            {
            var display = "<table><tr><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Post Code</th><th>Shipped Date</th></tr>";
            var count = 0;
            for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
            {
                display += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
            }
            display += "</table>";
            document.getElementById("listContents").innerHTML = display;
            }
    }
    
function AddressUpdate()
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    document.getElementById("demo").innerHTML = output;
                }
        }    
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
        var orderid = Number(document.getElementById("orderID").value);
        var shipname = document.getElementById("shipName").value;
        var shipaddress = document.getElementById("shipAddress").value;
        var shipcity = document.getElementById("shipCity").value;
        var shippostcode = document.getElementById("shipPostcode").value;
        
        var parameters = '{"OrderID":' + orderid + ',"ShipName":"' + shipname + '","ShipAddress":"' + shipaddress + '","ShipCity":"' + shipcity + '","ShipPostcode":"' + shippostcode + '"}';
                
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
    
function DeleteCustomer()
       {
            var xmlhttp = new XMLHttpRequest();
            var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
            url += document.getElementById("deleteID").value;
                        
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    GenerateOutput(output);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function GenerateOutput(result)
            {
                var display = result.DeleteCustomerResult.Exception;
                document.getElementById("listContents").innerHTML = display;
            }
        }
        
function CreateCustomer()
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var output = JSON.parse(xmlhttp.responseText);
                    document.getElementById("demo").innerHTML = output;
                }
        }    
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
        var customerid = document.getElementById("customerID").value;
        var companyname = document.getElementById("companyName").value;
        var city = document.getElementById("city").value;
                
        var parameters = '{"CustomerID":"' + customerid + '","CompanyName":"' + companyname + '","City":"' + city + '"}';
                
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
