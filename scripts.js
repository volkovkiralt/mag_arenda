     function openWin(url)
        {
            let sum = calculate();
            if (sum > 0)
            {
               
			   myWin= open(url);
				
            }
        }

        function calculate()
        {
            let sum  = 0,
                size = 12;           // количество позиций (различных товаров)
			
            localStorage.clear();   // очищение хранилища (для обновления данных)

            for (let i = 1; i <= size; i++)
            {
                let price = 0,
                    count = 0;

                if (document.getElementById("count"+i).value != 0)
                {
                    count = document.getElementById("count"+i).value;
                    count = parseInt(count);
                    price = parseInt(document.getElementById("price"+i).value);
                    let name = document.getElementById("productName"+i).innerHTML;
					let namekey = "productName"+i;
                    // Создание объекта со свойствами (как массив элементов, у которых есть свои параметры)
                    var object = {
                        name: name,
                        price: price,
                        count: count,
                    } 
                    localStorage.setItem(namekey, JSON.stringify(object)); // Дабавление данных в локальное хранилище в виде объекта в формате JSON
                }
                sum += price * count;
            }
            return sum;
        }
	var zakazt="%0A------ ЗАКАЗ -------";			
	function ReadStor()
        {
            let sum  = 0,
                size = 12;           // количество позиций (различных товаров)
            var totalItems = '<table class="shopp_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th><th>Сумма</th></tr>';

            for (let i = 1; i <= size; i++)
            {
                let price = 0,
                    count = 0;
  
                let nameF = "productName"+i;
				  
                    // Создание объекта со свойствами (как массив элементов, у которых есть свои параметры)
                var objRead = JSON.parse(localStorage.getItem(nameF));
				
				if(objRead !== null)
				{
					totalItems += '<tr>';
					totalItems += '<td>' + objRead['name'] + '</td>';
					zakazt += "%0A" + objRead['name'];
					totalItems += '<td>' + objRead['price'] + '</td>';
					zakazt +=" цена: " + objRead['price']; 
					totalItems += '<td>' + objRead['count'] + '</td>';
					zakazt +="руб. X " + objRead['count'];
					totalItems += '<td>' + objRead['count']*objRead['price'] + '</td>';
					totalItems += '</tr>';
					zakazt +="шт. = " + objRead['count']*objRead['price'] + "руб.";
					sum += objRead['count']*objRead['price'];
					
				}
		
			}
				if(sum >0)
				{totalItems += '<tr><td colspan="3" id="itogo">Итого</td><td>'+sum+'</td></tr></table>';}
				else
					{totalItems = '<h1 class="korz_title"> пуста </h1>';}
				
            return totalItems;
        }	
		
	
var nameForm = '';
var emailForm = '';
var telForm = '';

function proverkaFormi () {

	var reEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	var rePhone  = /(^(\+7|7|8)([0-9]){10}$)|(^([0-9]){7}$)/;
	var reName = /^[а-яА-ЯёЁ'][а-яА-ЯёЁ']+[а-яА-ЯёЁ']?$/;

	var temp = '';

	if ((nameForm === '') && (emailForm === '') && (telForm === '')) 
    {alert('Заполните форму!'); return 0;}
	else {
		if (nameForm.length< 3 ) 
            {
                alert('Заполните поле "Ваше имя"');
                return false;
            }
		if (telForm !== '') 
         {
        	if (!(rePhone.test(telForm))) 
            {
                alert('Проверьте ввод номера телефона!');
                return 0;
            }
         }
		else {alert('Введите номер телефона!'); return 0;}
		
		if (emailForm !== '') 
        {
			if (!(reEmail.test(emailForm)) || (emailForm === '')) 
            {
               alert("Введите правильный E-Mail ");
                return false;
            }
        }
			else { alert("Введите E-Mail "); return 0;}
		
	}
	var form   = document.forms.zForm,
        text= form.name.value+'%0AПаспорт-'+'%0AАдрес -'+form.adr.value+'%0AТелефон - '+form.tel.value+'%0AEmail - '+form.email.value;
  
    window.open('mailto: kirill.volkov.2712@mail.ru?subject=Заказ_c_сайта_Заказо&body='+text+zakazt);  
   }


function zakaz () {
	poClose();
	scrollPage('zakaz');
}

//'%0AПочтовый индекс - '+form.pind.value++form.pasp.value+'%0AСтрана - '+form.country.value+'%0AРегион -'+form.region.value