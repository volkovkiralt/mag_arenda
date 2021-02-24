# mag_arenda
first sait
<!doctype html>
<html lang="ru">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>МАГАЗИН</title>
	<link rel="stylesheet" href="style.css">
    <script src="scripts.js"></script>
	<!--<script src="js/country.js"></script> -->
</head>

<body id="telo">

	<div id="header">
		<div id="logo"></div>
		<div id="org"></div>
		<div id="contact">
			<span class="telText"><br>Телефон:</span> <span class="telNum"> +7 (999) 123-45-67</span>
			<span class="adr"></span>
		</div>
	</div>
	
	<div id="navFon"></div>
	
	<div id="navmenu">
		<ol>
			<li><a href="index.html">Главная</a></li>
			<li><a href="zakaz.html">Оформление заказа</a></li>
		</ol>
	</div>
	
	
	   <div class="container">
       <table>
            <tr>
                <th class="td1">Вид товара</th>
                <th class="td2">Наименование</th>
                <th class="td3">Бренд</th>
                <th class="td4">Страна </th>
                <th class="td5">Описание</th>
                <th class="td6">Цена </th>
                <th class="td7">Количество, шт</th>
            </tr>
            <tr>
                <td class="td1"><img class="foto" src="img/ris1.jpg" ></td>
                <td class="td2" id="productName1">Благотворный Крем от Морщин для Контура Глаз</td>
                <td class="td3">ИвРоше</td>
                <td class="td4">Франция</td>
                <td class="td5">Благотворный уход интенсивно питает и разглаживает кожу контура глаз благодаря 30 Ценным Маслам, обогащенным Маслом 1000 Роз.<br>
				30 Ценных Масел обладают антивозрастными свойствами, а Масло 1000 Роз насыщено элементами для восстановления кожи.<br>
				Легкая кремовая текстура мгновенно смягчает кожу контура глаз и придает ей сияние. День за днем морщины контура глаз разглаживаются, мешки под глазами визуально сокращаются. </td>
                <td  class="td6"><input type="text" class="form-control" name="price1" id="price1" value="1990" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count1" id="count1" value="0" min="0"></td>
           		
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris2.jpg"></td>
                <td class="td2" id="productName2"  width="15%">Питательный Крем для Умывания</td>
                <td class="td3">Ив Роше</td>
                <td class="td4">Франция</td>
                <td class="td5">Не пенящийся Питательный Крем для Умывания с кремово-масляной текстурой удаляет макияж и деликатно очищает самую требовательную кожу. Формула крема обогащена 30 драгоценными маслами, обладающими антивозрастным эффектом.<br>Его преимущество: нежная формула превращается в атласную текстуру на вашем лице, не содержит сульфатов.</td>
                <td class="td6"><input type="text" class="form-control" name="price2" id="price2" value="690" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count2" id="count2" value="0" min="0"></td>
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris3.jpg"></td>
                <td class="td2" id="productName3">Обновляющий Растительный Пилинг</td>
                <td class="td3">Ив Роше</td>
                <td class="td4">Франция</td>
                <td class="td5">Ночной Обновляющий Растительный Пилинг заполняет самые глубокие морщины. После пробуждения кожа выглядит обновленной — более гладкой и красивой. Формула пилинга обогащена экстрактом Растения Жизни Мезембриантемум Кристаллинум, который активно борется с морщинами.</td>
                <td class="td6"><input type="text" class="form-control" name="price3" id="price3" value="990" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count3" id="count3" value="0" min="0"></td>
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris4.jpg"></td>
                <td class="td2" id="productName4">Крем для лица со змеиным ядом, 50 г </td>
                <td class="td3">Secret Skin Syn-ake</td>
                <td class="td4">Южная Корея</td>
                <td class="td5">Антивозрастная сыворотка в ампуле создана на основе синтетического пептида Syn-Ake, сходного по своим свойствам со змеиным ядом. Пептид расслабляет мускулатуру мимики лица, разглаживает неглубокие мимические морщинки, служит профилактикой от образования морщин, выравнивает кожный рельеф всего лица и укрепляет кожу. Эффективен от «гусиных лапок», значительно выравнивает носогубные мимические складки. Преимуществом при использовании этого косметического компонента является то, что ему присущ накопительный эффект.</td>
                <td class="td6">
                <input type="text" class="form-control" name="price4" id="price4" value="850" disabled="disabled">
                </td>
                <td class="td7">
                <input type="number" class="form-control" name="count4" id="count4" value="0" min="0">
                </td>
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris5.jpg"></td>
                <td class="td2" id="productName5">Тушь для ресниц All in One Mascara </td>
                <td class="td3">Artdeco</td>
                <td class="td4">Италия</td>
                <td class="td5">тон 1 Black,6 мл</td>
                <td class="td6"><input type="text" class="form-control" name="price5" id="price5" value="1250" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count5" id="count5" value="0" min="0"></td>
            </tr>
		   
 <tr>
                <td class="td1"><img class="foto" src="img/ris6.jpg" ></td>
                <td class="td2" id="productName6">Мерцающая губная помада Lip Jewels</td>
                <td class="td3">Artdeco</td>
                <td class="td4">Италия</td>
                <td class="td5">Легкая кремовая текстура.Сблеском </td>
                <td  class="td6"><input type="text" class="form-control" name="price1" id="price6" value="1190" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count1" id="count6" value="0" min="0"></td>
           		
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris7.jpg"></td>
                <td class="td2" id="productName7"  width="15%">Artdeco помада для губ</td>
                <td class="td3">Artdeco</td>
                <td class="td4">Италия</td>
                <td class="td5">Матовая стойкая "Full mat lip color" <br>Тон 33 </td>
                <td class="td6"><input type="text" class="form-control" name="price2" id="price7" value="690" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count2" id="count7" value="0" min="0"></td>
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris8.jpg"></td>
                <td class="td2" id="productName8">Карандаш для бровей "Sculpting brow pen"</td>
                <td class="td3">IsaDora </td>
                <td class="td4">Франция</td>
                <td class="td5">Черный, коричневый, серый.</td>
                <td class="td6"><input type="text" class="form-control" name="price3" id="price8" value="792" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count3" id="count8" value="0" min="0"></td>
            </tr>

            <tr>
                <td class="td1"><img class="foto" src="img/ris9.jpg"></td>
                <td class="td2" id="productName9">Спонж для макияжа "MAKE-UP blender sponge"</td>
                <td class="td3">IsaDora</td>
                <td class="td4">Франция</td>
                <td class="td5">Для нанесения тонального крема</td>
                <td class="td6">
                <input type="text" class="form-control" name="price4" id="price9" value="501" disabled="disabled">
                </td>
                <td class="td7">
                <input type="number" class="form-control" name="count4" id="count9" value="0" min="0">
                </td>
            </tr>
            <tr>
                <td class="td1"><img class="foto" src="img/ris10.jpg"></td>
                <td class="td2" id="productName10">Карандаш для внутреннего века "Inliner kajal"</td>
                <td class="td3">IsaDora</td>
                <td class="td4">Италия</td>
                <td class="td5">тон 1 Black, 1.3 г</td>
                <td class="td6"><input type="text" class="form-control" name="price5" id="price10" value="550" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count5" id="count10" value="0" min="0"></td>
            </tr>
		     <tr>
                <td class="td1"><img class="foto" src="img/ris11.jpg"></td>
                <td class="td2" id="productName11">Парфюмированная вода</td>
                <td class="td3">VERSACE CRYSTAL NOIR</td>
                <td class="td4">Италия</td>
                <td class="td5">50г</td>
                <td class="td6"><input type="text" class="form-control" name="price5" id="price11" value="6250" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count5" id="count11" value="0" min="0"></td>
            </tr>
		    <tr>
                <td class="td1"><img class="foto" src="img/ris12.jpg"></td>
                <td class="td2" id="productName12">Парфюмированная вода</td>
                <td class="td3">SALVADOR DALI LAGUNA </td>
                <td class="td4">Испания</td>
                <td class="td5">50 г</td>
                <td class="td6"><input type="text" class="form-control" name="price5" id="price12" value="3250" disabled="disabled"></td>
                <td class="td7"><input type="number" class="form-control" name="count5" id="count12" value="0" min="0"></td>
            </tr>
		   </table>
		<div class="itog">
            <div class="col-sm-10">
                <form name="form1">
                  <label for="result" class="col-sm-2">Всего</label>  <input type="text" class="form-control" id="result" placeholder="0">
                </form>
            </div>
        </div>
             
        <button class="btn btn-success" type="button" onClick="openWin('zakaz.html')">Перейти в корзину</button>
       <button class="btn btn-primary" type="submit" onClick="document.form1.result.value=calculate()">Рассчитать</button>
    </div>
		
 <footer>

	<div id="wrapperCopirayt">© 2020. Разработчик - Волков Кирилл Васильевич 
	</div>

</footer>


</body>

</html>
