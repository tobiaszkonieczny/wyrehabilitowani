import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "~/components/ui/button"

export function RegulaminSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const healthServicesData = [
    { service: "Masaż leczniczy – pleców", category: "MASAŻE LECZNICZE", price: "160 zł" },
    { service: "Wizyta fizjoterapeutyczna (ortopedyczna)", category: "WIZYTY FIZJOTERAPEUTYCZNE", price: "170 zł" },
    { service: "Wizyta fizjoterapeutyczna (stomatologiczna)", category: "WIZYTY FIZJOTERAPEUTYCZNE", price: "170 zł" }
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
                <ol className="space-y-4 text-sm leading-relaxed">
                  <li>
                    Praktyka zawodowa (zwana dalej: „Praktyką") jest prowadzona przez Milenę Zarzeczną prowadzącą działalność gospodarczą pod firmą: „WYREHABILITOWANI MILENA ZARZECZNA", ze stałym miejscem wykonywania działalności gospodarczej pod adresem: ul. Tysiąclecia, nr 25, 44-351 Turza Śląska, posiadającą numer NIP: 6343061369 oraz REGON: 542853651, wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
                  </li>
                  <li>
                    Praktyka jest wpisana do rejestru praktyk zawodowych fizjoterapeutów, numer księgi rejestrowej: 000000295272, organ rejestrowy: Krajowa Izba Fizjoterapeutów.
                  </li>
                  <li>
                    Praktyka prowadzi działalność leczniczą rodzaju ambulatoryjne świadczenia zdrowotne.
                  </li>
                  <li>
                    Praktyka udziela ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii, polegających na:
                    <ol className="mt-2 space-y-1">
                      <li>1) diagnostyce funkcjonalnej pacjenta;</li>
                      <li>2) kwalifikowaniu, planowaniu i prowadzeniu kinezyterapii;</li>
                      <li>3) kwalifikowaniu, planowaniu i prowadzeniu masażu;</li>
                      <li>4) dobieraniu do potrzeb pacjenta wyrobów medycznych;</li>
                      <li>5) nauczaniu pacjentów posługiwania się wyrobami medycznymi;</li>
                      <li>6) prowadzeniu działalności fizjoprofilaktycznej, polegającej na popularyzowaniu zachowań prozdrowotnych oraz kształtowaniu i podtrzymywaniu sprawności i wydolności osób w różnym wieku w celu zapobiegania niepełnosprawności;</li>
                      <li>7) wydawaniu opinii i orzeczeń odnośnie do stanu funkcjonalnego osób poddawanych fizjoterapii oraz przebiegu procesu fizjoterapii;</li>
                      <li>8) nauczaniu pacjentów mechanizmów kompensacyjnych i adaptacji do zmienionego potencjału funkcji ciała i aktywności.</li>
                    </ol>
                  </li>
                  <li>
                    Świadczenia zdrowotne są udzielane wyłącznie pacjentom dorosłym.
                  </li>
                  <li>
                    Świadczenia zdrowotne udzielane są wyłącznie odpłatnie. Wysokość opłat za udzielone świadczenia zdrowotne określa cennik.
                  </li>
                  <li>
                    Godzina wizyty podana przy rejestracji jest godziną rozpoczęcia udzielania świadczenia zdrowotnego. Pacjent zobowiązany jest do stawienia się punktualnie na wizytę.
                  </li>
                  <li>
                    W przypadku spóźnienia się pacjenta na wizytę ulega ona odpowiedniemu skróceniu. W przypadku dużego spóźnienia (powyżej 10 minut) lub w przypadku, gdy z uwagi na długość spóźnienia nie można w należyty sposób udzielić świadczenia zdrowotnego Praktyka może odmówić udzielenia świadczenia zdrowotnego. Pacjent jest wówczas zobowiązany do poniesienia kosztów wizyty.
                  </li>
                  <li>
                    Praktyka zastrzega sobie możliwość zmiany lub odwołania umówionego terminu udzielenia świadczenia zdrowotnego z ważnych przyczyn od niego niezależnych (m.in. choroba personelu medycznego). Zmiana terminu udzielenia świadczenia zdrowotnego wymaga akceptacji Pacjenta.
                  </li>
                  <li>
                    W przypadku odwołania przez Praktykę terminu udzielenia świadczenia zdrowotnego, opłata uiszczona za świadczenie zdrowotne podlega zwrotowi. W przypadku zmiany terminu udzielenia świadczenia zdrowotnego przez Praktykę za zgodą Pacjenta opłata uiszczona za świadczenie zdrowotne podlega zaliczeniu na poczet świadczenia zdrowotnego w nowym terminie.
                  </li>
                  <li>
                    Pacjent może odwołać wizytę (zmienić jej termin) na 24 godziny przed umówioną godziną wizyty. W przypadku odwołania (zmiany terminu) wizyty po tym terminie, Praktyka jest uprawniona do dochodzenia od pacjenta odszkodowania w wysokości równowartości wizyty odwołanej (zmienionej) po terminie. Każdy przypadek będzie rozpatrywany indywidualnie.
                  </li>
                </ol>
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