# chatbot-flask 
- Chatbot, który tu widzicie jest wykorzystany do funkcji konsultanta. Jego zadaniem jest odpowidać na najczęściej zadawane pytania przez użytkowników witryny.
- Projekt ten zaczęłam na stażu studenckim, jednak po jego zakończeniu, podęłam się dalszej pracy botem. Dzięki temu poznałam możliwości sekwencyjnych sieci neuronowych, poza standardowymi
klasyfikacjami recenzji filmów, wpisów na twiterze czy spam-maili. 
- Chatbot pisany jest w Pythonie oraz JS. 
  - Python jest tu użyty do przetwarznia pytań otrzymanych z formularza czatu i wysyłania odpowiedzi na nie. Oprócz tego model uczący się pytań, który zanim zostanie użyty do udzielenia
  włściwej odpowiedzi, jest odpowiednio trenowany.
  - JS obsługuje komunikację między witryną a kodem Pythona oraz samo okno czatu. 
  - Użyty został również framework pythonowy do tworzenia witryn: flask, który umożliwia komunikację między Pythonem a JS.
- Jeśli ktoś chciałby sobie pogadać z botem, może to zrobić uruchamiając plik bezpośrednio z githuba w usłudze gooogle.colab.com. 
wybierz pilk -> chatBot_flask_testowa.ipynb -> kliknij "Open in Colab" -> uruchom po kolei wszystkie komórki -> zjedź na dół i poczekaj, aż model skończy się uczyć -> kliknij w "* Running on http://2e6d-34-125-78-31.ngrok.io"

UWAGA: * Running on http://2e6d-34-125-78-31.ngrok.io ten link będzie się zmieniał za każdym razem, gdy ponownie uruchomisz kod z komórki, w której wywoływany flask

- wersja live wkrótce będzie dostępna
