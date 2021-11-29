# chatbot-flask 
- Chatbot, który tu widzicie jest wykorzystany jako konsultant. Jego zadaniem jest odpowidać na najczęściej zadawane pytania przez użytkowników witryny.
- Projekt ten zaczęłam na stażu studenckim i kontynuowałam pracę nad nim po zakończeniu praktyk. Dzięki temu poznałam możliwości sekwencyjnych sieci neuronowych, poza standardowymi klasyfikacjami recenzji filmów, wpisów na twiterze czy spam-maili. Wyzwaniem był język polski, ale dzięki odpowiedniemu przeuczeniu modelu i użyciu właściwego pakietu, nie stanowił już większego problemu.  
- Chatbot pisany jest w Pythonie oraz JS. 
  - Python jest tu użyty do przetwarznia pytań otrzymanych z formularza czatu i wysyłania odpowiedzi na nie. Model uczący się pytań został przeuczony tak, aby być w stanie bez większych trudności na nie odpowiadać.
  - JS obsługuje komunikację między witryną a kodem Pythona, okno czatu i wyświetlanie wiadomości bota i użytkownika. 
  - Użyty został również framework pythonowy do tworzenia witryn: flask, w tym przypadku użyłam wersji dla środowiska gooogle.collab.
  - Aby bot był w stanie rozpoznawać polskie słowa, wykorzystałam pakiet morfeusz2, który umożliwia lemmatyzację wyrazów polskich.
- Jeśli ktoś chciałby sobie pogadać z botem, może to zrobić uruchamiając plik bezpośrednio z githuba w środowisku gooogle.colab.com. 
wybierz pilk -> chatBot_flask.ipynb -> kliknij "Open in Colab" -> uruchom po kolei wszystkie komórki -> zjedź na dół i poczekaj, aż model skończy się uczyć -> kliknij w "* Running on http://2e6d-34-125-78-31.ngrok.io"

UWAGA: * Running on http://2e6d-34-125-78-31.ngrok.io - ten link będzie się zmieniał po każdym uruchomieniu komórki, z której wywoływany jest flask.


