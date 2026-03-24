import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "~/components/ui/button"

export function RegulaminSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const healthServicesData = [
    { service: "Masaż leczniczy – pleców", category: "MASAŻE LECZNICZE", price: "160 zł" },
    { service: "Wizyta fizjoterapeutyczna (ortopedyczna)", category: "WIZYTY FIZJOTERAPEUTYCZNE", price: "170 zł" },
    { service: "Wizyta fizjoterapeutyczna (stomatologiczna)", category: "WIZYTY FIZJOTERAPEUTYCZNE", price: "170 zł" },
    { service: "Pierwsza wizyta diagnostyczno - terapeutyczna", category: "WIZYTY FIZJOTERAPEUTYCZNE", price: "180 zł" }
  ]

  const documentationData = [
    { method: "Kopia dokumentacji medycznej", price: "0,59 zł za stronę" },
    { method: "Wydruk dokumentacji medycznej", price: "0,59 zł za stronę" },
    { method: "Odpis dokumentacji medycznej", price: "16,95 zł za stronę" },
    { method: "Wyciąg dokumentacji medycznej", price: "16,95 zł za stronę" },
    { method: "Na informatycznym nośniku danych (płyta CD lub DVD)", price: "3,39 zł" },
    { method: "Pierwsze udostępnienie dokumentacji medycznej w postaci kopii, wydruku, odpisu lub wyciągu lub na informatycznym nośniku danych", price: "bezpłatnie" }
  ]

  return (
    <section id="regulamin" className="py-12 lg:py-16 bg-[var(--bg-primary)] border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            Regulamin Praktyki
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Zapoznaj się z regulaminem naszej praktyki fizjoterapeutycznej
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-stone-200">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="ghost"
              className="w-full flex items-center justify-between text-left p-0 hover:bg-transparent"
            >
              <span className="text-lg font-semibold text-stone-800">
                Pokaż regulamin
              </span>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-stone-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-stone-600" />
              )}
            </Button>
          </div>

          <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-6 space-y-6">
              {/* Regulamin Content */}
              <div className="prose prose-stone max-w-none">
                <div className="space-y-6 text-sm leading-relaxed">
                  <div className="text-center">
                    <h3 className="font-bold text-base mb-1">REGULAMIN ORGANIZACYJNY</h3>
                    <h4 className="font-bold text-base mb-4">PRAKTYKI ZAWODOWEJ „WYREHABILITOWANI MILENA ZARZECZNA"</h4>
                  </div>

                  {/* §1 */}
                  <div>
                    <h4 className="font-bold mb-2">§1. POSTANOWIENIA OGÓLNE</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Niniejszy regulamin (dalej: „Regulamin") określa sposób i warunki udzielania świadczeń zdrowotnych przez Milenę Zarzeczną prowadzącą działalność gospodarczą pod firmą: „WYREHABILITOWANI MILENA ZARZECZNA", ze stałym miejscem wykonywania działalności gospodarczej pod adresem: ul. Tysiąclecia, nr 25, 44-351 Turza Śląska, posiadającą numer NIP: 6343061369 oraz REGON: 542853651, wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzącego praktykę fizjoterapeutyczną (dalej: „Praktyka"), adres do korespondencji: ul. Książęca 31 lok. 25, 40-725 Katowice.</li>
                      <li>2. Rodzaj Praktyki to: 98 – indywidualna praktyka fizjoterapeutyczna.</li>
                      <li>3. Praktyka działa na podstawie Regulaminu oraz obowiązującego prawa, a w szczególności:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej;</li>
                          <li>2) ustawy z dnia 25 września 2015 r. o zawodzie fizjoterapeuty;</li>
                          <li>3) ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta;</li>
                          <li>4) innych przepisów, mających wpływ na działalność podmiotów wykonujących działalność leczniczą, w tym aktów wykonawczych do ustaw wymienionych w punkcie 1) – 3) powyżej.</li>
                        </ul>
                      </li>
                      <li>4. Praktyka jest wpisana do rejestru podmiotów wykonujących działalność leczniczą numer księgi rejestrowej: 000000295272, organ rejestrowy: Krajowa Izba Fizjoterapeutów.</li>
                    </ol>
                  </div>

                  {/* §2 */}
                  <div>
                    <h4 className="font-bold mb-2">§2. CELE I ZADANIA PRAKTYKI</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Celem Praktyki jest organizowanie i udzielanie ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii, służących ratowaniu, zachowaniu, przywracaniu i poprawie zdrowia.</li>
                      <li>2. Do zadań Praktyki należy w szczególności:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) udzielanie świadczeń zdrowotnych z zakresu fizjoterapii, w tym udzielanie indywidualnych porad i konsultacji w zakresie fizjoterapii;</li>
                          <li>2) działania edukacyjne na rzecz pacjentów, promocja zdrowia i działania mające na celu fizjoprofilaktykę zdrowia;</li>
                          <li>3) współdziałanie z innymi podmiotami wykonującymi działalność leczniczą;</li>
                          <li>4) inne zadanie wynikające z powszechnie obowiązujących przepisów prawa.</li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  {/* §3 */}
                  <div>
                    <h4 className="font-bold mb-2">§3. RODZAJ DZIAŁALNOŚCI LECZNICZEJ I ZAKRES UDZIELANYCH ŚWIADCZEŃ ZDROWOTNYCH</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Praktyka prowadzi działalność leczniczą rodzaju ambulatoryjne świadczenia zdrowotne.</li>
                      <li>2. Praktyka udziela ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii, polegających na:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) diagnostyce funkcjonalnej pacjenta;</li>
                          <li>2) kwalifikowaniu, planowaniu i prowadzeniu kinezyterapii;</li>
                          <li>3) kwalifikowaniu, planowaniu i prowadzeniu masażu;</li>
                          <li>4) dobieraniu do potrzeb pacjenta wyrobów medycznych;</li>
                          <li>5) nauczaniu pacjentów posługiwania się wyrobami medycznymi;</li>
                          <li>6) prowadzeniu działalności fizjoprofilaktycznej, polegającej na popularyzowaniu zachowań prozdrowotnych oraz kształtowaniu i podtrzymywaniu sprawności i wydolności osób w różnym wieku w celu zapobiegania niepełnosprawności;</li>
                          <li>7) wydawaniu opinii i orzeczeń odnośnie do stanu funkcjonalnego osób poddawanych fizjoterapii oraz przebiegu procesu fizjoterapii;</li>
                          <li>8) nauczaniu pacjentów mechanizmów kompensacyjnych i adaptacji do zmienionego potencjału funkcji ciała i aktywności.</li>
                        </ul>
                      </li>
                      <li>3. Świadczenia zdrowotne są udzielane wyłącznie pacjentom dorosłym.</li>
                    </ol>
                  </div>

                  {/* §4 */}
                  <div>
                    <h4 className="font-bold mb-2">§4. MIEJSCE UDZIELANIA ŚWIADCZEŃ ZDROWOTNYCH</h4>
                    <p className="ml-4">Miejscem udzielania świadczeń zdrowotnych jest gabinet, znajdujący się pod adresem: ul. Tysiąclecia, nr 25, 44-351 Turza Śląska.</p>
                  </div>

                  {/* §5 */}
                  <div>
                    <h4 className="font-bold mb-2">§5. PRZEBIEG I ORGANIZACJA PROCESU UDZIELANIA ŚWIADCZEŃ ZDROWOTNYCH</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Świadczenia zdrowotne są udzielane wyłącznie odpłatnie. Wysokość opłat za udzielone świadczenia zdrowotne określa cennik, stanowiący Załącznik nr 1 do Regulaminu.</li>
                      <li>2. Świadczenia zdrowotne są udzielane w poniedziałki środy w godzinach od 10:00 do 18:00 oraz we wtorki, czwartki i piątki w godzinach od 10:00 do 16:00 (z wyłączeniem dni ustawowo wolnych od pracy). W uzasadnionych przypadkach istnieje możliwość udzielenia świadczeń zdrowotnych w innych dniach i godzinach.</li>
                      <li>3. Świadczenia zdrowotne są udzielane pacjentom po uprzedniej rejestracji, w terminie ustalonym z pacjentem.</li>
                      <li>4. Rejestracja pacjentów odbywa się:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) bezpośrednio w gabinecie;</li>
                          <li>2) telefonicznie pod numerem: 577 190 560;</li>
                          <li>3) za pośrednictwem portalu booksy.pl.</li>
                        </ul>
                      </li>
                      <li>5. Pacjenci mogą rejestrować się osobiście albo za pośrednictwem przedstawiciela ustawowego lub faktycznego.</li>
                      <li>6. Płatność za udzielane świadczenia zdrowotne ma miejsce po udzieleniu świadczenia. Dostępne formy płatności to: gotówka, karta płatnicza.</li>
                      <li>7. Przed przystąpieniem do udzielenia świadczenia zdrowotnego pacjent lub jego przedstawiciel ustawowy bądź faktyczny zobowiązany jest:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) podać dane niezbędne do prawidłowego uzupełnienia dokumentacji medycznej (a w szczególności: imię i nazwisko, numer PESEL i adres zamieszkania);</li>
                          <li>2) w przypadku takiej potrzeby okazać dokument tożsamości pacjenta i/lub przedstawiciela ustawowego pacjenta oraz podać dane niezbędne do prawidłowego uzupełnienia dokumentacji medycznej;</li>
                          <li>3) udzielić wszelkich wymaganych prawem zgód;</li>
                          <li>4) zaakceptować postanowienia regulaminów oraz klauzuli przetwarzania danych osobowych;</li>
                          <li>5) udzielić wszelkich informacji niezbędnych do prawidłowego udzielenia świadczenia zdrowotnego;</li>
                          <li>6) okazać posiadaną dokumentację medyczną oraz wyniki badań;</li>
                          <li>7) dokonać płatności za uprzednio udzielenie świadczenia zdrowotne.</li>
                        </ul>
                      </li>
                      <li>8. Praktyka zastrzega sobie możliwości odmowy udzielenia świadczenia zdrowotnego w przypadku, gdy:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) stan pacjenta (w tym stan jego zdrowia), uniemożliwia udzielenie świadczenia zdrowotnego lub kontynuowanie jego udzielania;</li>
                          <li>2) konieczne jest wykonanie świadczenia zdrowotnego przez inny podmiot udzielający świadczeń zdrowotnych;</li>
                          <li>3) pacjent lub jego przedstawiciel odmawia dokonania płatności za udzielenie świadczenia zdrowotnego;</li>
                          <li>4) pacjent lub jego przedstawiciel odmawia podania wymaganych danych osobowych lub potrzebnych informacji o stanie zdrowia;</li>
                          <li>5) pacjent lub jego przedstawiciel odmawia podpisania wymaganych prawem zgód na udzielenie świadczeń zdrowotnych, wymaganych dokumentów bądź akceptacji regulaminów;</li>
                          <li>6) pacjent lub jego przedstawiciel nie zachowuje podstawowych zasad kultury i dobrego wychowania, naruszając godność osobistą fizjoterapeuty.</li>
                        </ul>
                      </li>
                      <li>9. W przypadku, gdy w trakcie udzielenia świadczenia zdrowotnego nastąpi konieczność udzielenia dodatkowych świadczeń ich koszt jest ustalany indywidualnie z pacjentem, a płatność za udzielone świadczenie zdrowotne odbywa się niezwłocznie po jego udzieleniu.</li>
                      <li>10. W związku z zapłatą za udzielone świadczenia zdrowotne, wystawiany jest paragon fiskalny lub faktura, zgodnie z obowiązującymi przepisami w tym zakresie.</li>
                    </ol>
                  </div>

                  {/* §6 */}
                  <div>
                    <h4 className="font-bold mb-2">§6. ZASADY UDZIELANIA ŚWIADCZEŃ ZDROWOTNYCH</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Godzina wizyty podana przy rejestracji jest godziną rozpoczęcia udzielania świadczenia zdrowotnego. Pacjent zobowiązany jest do stawienia się punktualnie na wizytę.</li>
                      <li>2. W przypadku spóźnienia się pacjenta na wizytę ulega ona odpowiedniemu skróceniu. W przypadku dużego spóźnienia (powyżej 10 minut) lub w przypadku, gdy z uwagi na długość spóźnienia nie można w należyty sposób udzielić świadczenia zdrowotnego Praktyka może odmówić udzielenia świadczenia zdrowotnego. Pacjent jest wówczas zobowiązany do poniesienia kosztów wizyty.</li>
                    </ol>
                  </div>

                  {/* §7 */}
                  <div>
                    <h4 className="font-bold mb-2">§7. ODWOŁANIE LUB ZMIANA TERMINU ŚWIADCZENIA ZDROWOTNEGO</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Praktyka zastrzega sobie możliwość zmiany lub odwołania umówionego terminu udzielenia świadczenia zdrowotnego z ważnych przyczyn od niego niezależnych (m.in. choroba personelu medycznego). Zmiana terminu udzielenia świadczenia zdrowotnego wymaga akceptacji Pacjenta.</li>
                      <li>2. W przypadku odwołania przez Praktykę terminu udzielenia świadczenia zdrowotnego, opłata uiszczona za świadczenie zdrowotne podlega zwrotowi. W przypadku zmiany terminu udzielenia świadczenia zdrowotnego przez Praktykę za zgodą Pacjenta opłata uiszczona za świadczenie zdrowotne podlega zaliczeniu na poczet świadczenia zdrowotnego w nowym terminie.</li>
                      <li>3. Pacjent może odwołać wizytę (zmienić jej termin) na 24 godziny przed umówioną godziną wizyty. W przypadku odwołania (zmiany terminu) wizyty po tym terminie, Praktyka jest uprawniona do dochodzenia od pacjenta odszkodowania w wysokości równowartości wizyty odwołanej (zmienionej) po terminie. Każdy przypadek będzie rozpatrywany indywidualnie.</li>
                    </ol>
                  </div>

                  {/* §8 */}
                  <div>
                    <h4 className="font-bold mb-2">§8. UDOSTĘPNIANIE DOKUMENTACJI MEDYCZNEJ</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Praktyka prowadzi, przechowuje i udostępnia dokumentację medyczną osób korzystających ze świadczeń zdrowotnych, zgodnie z zasadami określonymi w przepisach prawa, a w szczególności w ustawie z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta oraz przepisach wykonawczych do tej ustawy.</li>
                      <li>2. Praktyka zapewnia ochronę danych zawartych w dokumentacji medycznej.</li>
                      <li>3. Dokumentacja medyczna jest udostępniana pacjentowi oraz innym podmiotom i osobom wskazanym w ustawie z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku praw Pacjenta.</li>
                      <li>4. Dokumentacja medyczna jest przechowywana przez okres przewidziany w przepisach prawa.</li>
                      <li>5. Wysokość opłat za udostępnienie dokumentacji medycznej określa Załącznik nr 2 do Regulaminu.</li>
                    </ol>
                  </div>

                  {/* §9 */}
                  <div>
                    <h4 className="font-bold mb-2">§9. POSTANOWIENIA KOŃCOWE</h4>
                    <ol className="space-y-2 ml-4">
                      <li>1. Integralną część Regulaminu stanowią wymienione w nim następujące załączniki:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>1) Załącznik nr 1 – CENNIK OPŁAT ZA ŚWIADCZENIA ZDROWOTNE;</li>
                          <li>2) Załącznik nr 2 – CENNIK OPŁAT ZA UDOSTĘPNIENIE DOKUMENTACJI MEDYCZNEJ.</li>
                        </ul>
                      </li>
                      <li>2. Wszyscy pracownicy Praktyki, pacjenci Praktyki, osoby odwiedzające oraz inne osoby przebywające w miejscu udzielania świadczeń zdrowotnych, o którym mowa w § 4 Regulaminu, w związku z procesem udzielania świadczeń zdrowotnych, są zobowiązani do przestrzegania Regulaminu.</li>
                      <li>3. W sprawach nieuregulowanych w Regulaminie zastosowanie mają przepisy powszechnie obowiązującego prawa, a w szczególności ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej, ustawy z dnia 25 września 2015 r. o zawodzie fizjoterapeuty, ustawy z dnia 6 listopada 2008 roku o prawach pacjenta i Rzeczniku Praw Pacjenta, akty wykonawcze do tych ustaw oraz inne przepisy prawa powszechnie obowiązującego.</li>
                      <li>4. Regulamin wchodzi w życie z dniem 31 października 2025 r.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Cennik świadczeń zdrowotnych */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Cennik opłat za świadczenia zdrowotne
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  udzielane przez „WYREHABILITOWANI MILENA ZARZECZNA"<br/>
                  Załącznik nr 2 do REGULAMINU PRAKTYKI
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-stone-200">
                    <thead className="bg-stone-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider border-b border-stone-200">
                          Świadczenie zdrowotne
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider border-b border-stone-200">
                          Cena brutto
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr className="bg-stone-50">
                        <td colSpan={2} className="px-6 py-2 text-sm font-semibold text-stone-800">
                          MASAŻE LECZNICZE
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-stone-900">
                          Masaż leczniczy – pleców
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-stone-900">
                          160 zł
                        </td>
                      </tr>
                      <tr className="bg-stone-50">
                        <td colSpan={2} className="px-6 py-2 text-sm font-semibold text-stone-800">
                          WIZYTY FIZJOTERAPEUTYCZNE
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-stone-900">
                          Wizyta fizjoterapeutyczna (ortopedyczna)
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-stone-900">
                          170 zł
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-stone-900">
                          Wizyta fizjoterapeutyczna (stomatologiczna)
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-stone-900">
                          170 zł
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-stone-900">
                          Pierwsza wizyta diagnostyczno - terapeutyczna
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-stone-900">
                          180 zł
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cennik dokumentacji medycznej */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Cennik opłat za udostępnienie dokumentacji medycznej
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  przez „WYREHABILITOWANI MILENA ZARZECZNA"
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-stone-200">
                    <thead className="bg-stone-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider border-b border-stone-200">
                          Sposób udostępnienia
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider border-b border-stone-200">
                          Opłata za udostępnienie
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {documentationData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                          <td className="px-6 py-4 text-sm text-stone-900">
                            {index + 1}. {item.method}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-stone-900">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}