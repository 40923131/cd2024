var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"第十五日誌","text":"紀錄本學期的每週進度 W15","tags":"w15","url":"./2024-Spring-w15-blog-tutorial.html"},{"title":"第十四日誌","text":"紀錄本學期的每週進度 W14","tags":"w14","url":"./2024-Spring-w14-blog-tutorial.html"},{"title":"第十三日誌","text":"紀錄本學期的每週進度 W13","tags":"w13","url":"./2024-Spring-w13-blog-tutorial.html"},{"title":"第十二日誌","text":"紀錄本學期的每週進度 W12","tags":"w12","url":"./2024-Spring-w12-blog-tutorial.html"},{"title":"第十一日誌","text":"紀錄本學期的每週進度 W11 W11遇到問題 更新blog時，因為W7與W8的slug一樣，導致之後更新的blog都無法上傳。 之後更新都要注意是否有更改到slug ./gen_blog中的pelican markdown -o blog -s local_publishconf.py意思是 執行這個指令後，由pelican幫我們把markdown下比較好理解的.md output成比較複雜的html 並且標題是slug 善於運用工具來節省繁瑣工作的時間","tags":"w11","url":"./2024-Spring-w11-blog-tutorial.html"},{"title":"第十週日誌","text":"紀錄本學期的每週進度 W10 論文: 2D Ball Balancer Control using QUARC 摘要： 這篇論文探討如何使用 QUARC 軟體和 PID 控制來穩定 2D Ball Balancer (2DBB) 設備上的球體位置。論文首先建立球體運動的數學模型，並推導出傳遞函數。接著，設計了一個串級控制系統，包含內迴路用於控制伺服電機角度，外迴路用於控制球體位置。論文也探討了設定點加權和積分器抗飽和等控制技術。接著，使用 Simulink 進行模擬，驗證控制器的效能，並確保在沒有執行器飽和的情況下滿足規格。最後，將控制器實現在實際的 2DBB 設備上，並評估其性能。 論文重點: 建模: 從牛頓運動定律推導球體運動的非線性方程式，並線性化以獲得傳遞函數表示。 控制設計: 設計串級控制系統，包含內迴路的伺服電機角度 PV 控制，和外迴路的球體位置 PID 控制。 模擬: 使用 Simulink 驗證控制器性能，並調整參數以滿足規格。 實作: 使用 QUARC 軟體將控制器實現在 2DBB 設備上，並驗證其控制效果。 結果分析: 分析實驗結果，並與模擬結果進行比較，探討模型未考慮到的因素，如摩擦和軸之間的耦合。 結論: 實驗結果顯示，PID 控制器可以有效地控制 2DBB 設備上的球體位置，並滿足指定的性能指標。然而，由於模型未考慮到的因素，如摩擦和軸之間的耦合，實際響應與模擬結果存在一些差異。通過調整控制參數，如積分器抗飽和參數和極點衰減時間常數，可以改善控制性能，並使球體更準確地追蹤期望的軌跡。 額外觀察: 論文詳細說明了如何使用 QUARC 軟體和 Simulink 進行控制系統的設計、模擬和實作。 論文強調了模型簡化的重要性，以及模型未考慮到的因素對控制性能的影響。 論文提供了一個完整的實驗指南，包括實驗步驟、結果分析和參考資料。 總體而言，這篇論文提供了一個很好的範例，說明如何使用 PID 控制和 QUARC 軟體來解決一個實際的控制問題。 論文: A Real-Time Control System for Balancing a Ball on a Platform with FPGA Parallel Implementation 摘要: 這篇論文提出了一種基於 PID 控制器的解決方案，用於提高平台上球體位置控制的精度。論文首先建立了球體在平台上運動的數學模型和傳遞函數。接著，設計並實現了一個基於 FPGA 的並行 PID 控制器，用於控制平台的兩個伺服電機，以實現對球體位置的控制。通過 Matlab Simulink 進行模擬，驗證了控制器的性能，並展示了 FPGA 實現 PID 控制器的高速性和并行性優勢。 論文重點: 建模: 建立球體在平台上運動的數學模型和傳遞函數。 PID 控制器設計: 設計 PID 控制器，並使用增量算法進行離散化，以適應硬件實現。 FPGA 實現: 使用 VHDL 語言在 FPGA 上實現 PID 控制器，並採用并行計算架构，以提高计算速度。 模擬與驗證: 使用 Matlab Simulink 進行模擬，驗證控制器的性能，並與理論結果進行比較。 結論: 實驗結果表明，基於 FPGA 的平行 PID 控制器能夠有效地控制平台上球體的位置，並且具有較高的精度和速度。與傳統的微控制器相比，FPGA 具有更高的計算能力和平行性，可同時控制多個參數，並實現更複雜的控制演算法。 額外觀察: 論文展示了 FPGA 在即時控制系統中的應用潛力，特別是對於需要高速和平行運算的控制任務。 論文提供了一個完整的 PID 控制器硬體實現方案，包括演算法離散化、VHDL 程式碼設計和 FPGA 綜合。 論文結果表明，平行計算架構可以顯著提高 PID 控制器的計算速度，使其能夠滿足即時控制的要求。 總體而言，這篇論文為基於 FPGA 的即時控制系統設計提供了一個很好的實例，並展示了 FPGA 在提高控制精度和速度方面的優勢。 論文:: Ball on the Plate Balancing Control System: 論文摘要與結論 摘要: 這篇論文探討了在二維平面上平衡不穩定物體的問題，並設計了一個基於微控制器的球體平衡控制系統。論文首先介紹了平衡控制問題的背景和應用，包括在電影拍攝、導航、運輸控制和機器人等領域的應用。接著，詳細描述了實驗平台的機械設計，包括使用電阻式觸摸屏獲取球體位置數據，以及使用步進電機和位置傳感器控制平台傾斜角度。然後，介紹了基於 AVR 微控制器的雙環路串級控制系統，並採用 PID 控制器來維持球體位置。最後，通過實驗驗證了控制系統的性能，並討論了未來的改進方向。 論文重點: 平衡控制問題: 探討了平衡控制問題的背景和應用，包括球體平衡、球體和樑平衡、Delta 機器人控制和 Stuart 平台控制等。 實驗平台設計: 詳細介紹了實驗平台的機械設計，包括電阻式觸摸屏、步進電機、位置傳感器和微控制器等組件。 控制系統設計: 設計了基於 AVR 微控制器的雙環路串級控制系統，並使用 PID 控制器來維持球體位置。 實驗驗證: 進行了實驗，驗證了控制系統的性能，並展示了球體位置控制的效果。 結論: 實驗結果表明，所設計的控制系統能够有效地維持球體在平台上的平衡。通過使用電阻式觸摸屏和步進電機，系統能够準確地獲取球體位置信息，並控制平台的傾斜角度，從而實現球體的平衡控制。 額外觀察: 論文提出了一種使用電阻式觸摸屏來獲取球體位置信息的方法，避免了使用昂貴的視覺系統。 論文採用了步進電機和位置傳感器，而不是通常使用的伺服電機，提供了更高的扭矩和可靠性。 論文設計的控制系統完全基於微控制器，無需外部計算機，使得實驗平台更加緊湊和易於使用。 總體而言，這篇論文提供了一個設計球體平衡控制系統的實用方案，並展示了其在教育和研究方面的應用價值。 未來改進方向: 改善球體位置反饋信號的濾波，以提高控制系統的速度和質量。 將控制問題轉換為更複雜的 Delta 機器人控制，以應用於工業自動化等領域。 論文: Construction and Theoretical Study of a Ball Balancing Platform 這篇論文探討了使用自動控制理論穩定動態系統的局限性，並以一個球體平衡平台作為範例進行了理論和實驗研究。論文首先建立了球體在平台上運動的數學模型，並設計了一個基於 PID 控制器的控制系統。接著，使用 Arduino 微控制器和伺服電機搭建了一個實驗平台，並通過實驗驗證了控制器的性能。論文分析了理論模型與實驗結果之間的差異，並探討了造成這些差異的因素，包括物理模型簡化、構造誤差和電氣元件非理想特性等。 論文重點: 系統建模: 使用牛頓力學建立球體在平台上運動的數學模型，並推導出線性化的運動方程式。 控制系統設計: 設計一個基於 PID 控制器的控制系統，並使用 MATLAB 進行模擬和參數調整。 實驗平台搭建: 使用 Arduino 微控制器、伺服電機和電阻式觸摸屏搭建一個球體平衡平台。 結果分析: 比較理論模擬結果和實驗結果，分析造成差異的因素，並探討控制系統的性能局限性。 結論: 使用線性控制方法可以設計並搭建一個性能良好的球體平衡平台，但存在靜態誤差無法完全消除的問題。 理論模型與實驗結果之間的差異主要由物理模型簡化、構造誤差和電氣元件非理想特性等因素造成。 穩定不穩定或半穩定系統的性能受限於狀態調整能力、控制器設計和輸入數據獲取的精度和速度等因素。 額外觀察: 論文詳細介紹了 PID 控制器的原理和設計方法，並展示了如何在 Arduino 平台上實現 PID 控制。 論文深入分析了實驗結果與理論預期之間的差异，並探討了造成差異的物理因素和控制理論因素。 論文討論了未來改進方向，包括使用性能更好的伺服電機、更高精度的球體位置感測器和更先進的濾波算法等。 總體而言，這篇論文提供了一個很好的範例，展示了如何將自動控制理論應用於一個實際的工程問題，並探討了在實現過程中遇到的挑戰和局限性。 論文 Design and Implementation of a Ball Balancing System for Control Theory Course 摘要: 這篇論文介紹了一個用於控制理論課程的球體平衡系統的設計與實現。該系統旨在幫助學生學習和理解 PID 控制的基本原理，並通過微控制器編程來實現控制算法。論文首先討論了設計該系統的動機和目的，然後介紹了三個原型版本，並比較了它們的優缺點。最終設計的系統由伺服電機、距離傳感器、微控制器板和機械平台組成。論文還介紹了控制算法的設計和實現，以及如何在 MATLAB 中獲取和繪製實時數據。最後，論文展示了實驗結果，並討論了該系統的教育意義和未來改進方向。 論文重點: 設計動機: 為了控制理論課程設計一個新的實驗，幫助學生學習 PID 控制、閉環控制和反饋系統等概念。 原型設計: 設計了三個原型版本，並比較了它們的優缺點，最終選擇了由木頭和金屬桿製成的輕便便攜版本。 控制算法: 採用了 PID 控制算法，並結合自適應控制思想，根據球體位置和運動方向調整控制參數。 MATLAB 數據獲取: 開發了 Arduino 和 MATLAB 的接口程序，用於在 MATLAB 中繪製球體位置的實時曲線。 實驗結果: 展示了實驗結果，表明 PID 控制器能够有效地維持球體在平台上的平衡，但系統的重複性仍需改進。 結論: 球體平衡系統是一個低成本且有效的教育工具，可以幫助學生將控制理論知識應用於實踐，並提高他們的編程能力和對閉環控制系統的理解。 額外觀察: 論文強調了實踐的重要性，以及通過動手實驗來學習控制理論的益處。 論文展示了如何使用 Arduino 和 MATLAB 進行控制系統設計和數據分析。 論文討論了自適應控制的概念，並展示了如何在微控制器編程中實現自適應控制。 未來改進方向: 提高系統的重複性，例如使用更重的球體或改進控制算法。 使用數字伺服電機，以獲得更精確的 PWM 控制。 使用更高精度的距離傳感器，以提高系統的精度。 開發更複雜的控制算法，例如模糊控制或神經網絡控制。 總體而言，這篇論文提供了一個設計和實現球體平衡系統的完整方案，並展示了其在控制理論教學中的應用價值。 論文:Simulation and Experimental Study of Ball Position Control at Biaxial Platform Using State Space Approach 摘要: 這篇論文探討了使用狀態空間方法控制雙軸平台上球體位置的問題。論文首先建立了球體在平台上運動的數學模型，並設計了三種控制結構：PD 控制器、狀態反饋和帶狀態觀測器的狀態反饋。論文詳細介紹了每種控制結構的設計方法和參數調整過程，並使用 MATLAB 進行了模擬和實驗驗證。實驗結果表明，帶狀態觀測器的狀態反饋控制結構具有最佳的性能，能够有效地穩定球體位置並實現軌跡跟蹤。 論文重點: 系統建模: 使用牛頓力學建立球體在平台上運動的數學模型，並推導出傳遞函數。 控制結構設計: 設計三種控制結構：PD 控制器、狀態反饋和帶狀態觀測器的狀態反饋。 參數調整: 使用極點配置方法和 Dodd 公式確定控制器的參數。 模擬與實驗: 使用 MATLAB 進行模擬和實驗，驗證控制結構的性能，並比較不同結構的優缺點。 結論: 带狀態觀測器的狀態反饋控制結構具有最佳的性能，能够有效地穩定球體位置並實現軌跡跟蹤。 狀態觀測器可以重建系統狀態變量，避免了使用微分器帶來的噪聲放大問題。 論文提出的控制方法可以應用於其他類型的平衡控制系統，例如無人機、船舶和火箭等。 額外觀察: 論文詳細介紹了狀態空間方法在控制系統設計中的應用，並展示了如何使用 MATLAB 進行模擬和分析。 論文比較了三種控制結構的性能，並分析了它們的優缺點，為控制系統設計提供了參考。 論文提出的實驗平台可以作為一個教育工具，用於演示和學習控制理論的概念和方法。 總體而言，這篇論文為使用狀態空間方法控制球體位置提供了一個完整的解決方案，並展示了其在實際應用中的有效性。","tags":"w10","url":"./2024-Spring-w10-blog-tutorial.html"},{"title":"第九週日誌","text":"紀錄本學期的每週進度 W9 使用課程提供的goodle AI studio翻譯論文中的內容 我分配到的內容是41~50頁，以下是我對AI的提問及AI對我的回答及重點整理 閱讀以上文章並幫我完整翻譯41頁到50頁的內容及整理出文章重點 第 41~50 頁完整翻譯與重點整理： 5.4. Development（開發階段） 現在公司的基本結構已經在軟體中建立，可以開始模擬過程了。首先，重點關注 Odoo 中新產品的開發方面（圖 9），特別是，由於這是公司創建的第一個產品，因此評估 Odoo 在組織原型設計過程中的可能用途。這包括從構思到設計和原型生產的路徑。然後，一旦產品作為原型達到可接受的結果，將進行與生產過程開發相關的工作。一旦完成正式的生產運行，產品開發即被視為成功。 5.4.1. Idea - design - product prototype（構思 - 設計 - 產品原型） 如第 4 章所述，產品的構思已經建立，並且已經進行了初步設計特徵和基本產品研究。這代表了 Odoo 軟體在現實世界中的實際實現，因為儘管 Odoo 擁有良好的項目管理和溝通應用程序，但這些應用程序與庫存和製造應用程序是外部的，更重要的是，與工程設計 CAD 軟件沒有任何集成。在此模擬中，該想法已被付諸紙面，並使用 Solidworks 軟體轉換為 CAD 設計，從而在工程師計算機中本地生成 CAD 文件。 圖 36 關於產品開發的分段圖 在這個時候，可以正式使用 Odoo 軟體了。第一步是了解就產品項目而言生產的主題是什麼。有兩種方法可以做到這一點： 第一種是將原型視為最終產品的早期版本，即在 Odoo 中創建的原型項目將與最終產品項目相同，並且在開發過程中進行修訂。如果原型是通過與最終生產中使用的相同方法實現的，則建議這樣做。這種方法的一個例子是，如果產品足夠簡單，可以將產品和生產方面的開發一起進行。 第二種是將原型視為與最終產品分開的項目 - 這是本次模擬中採用的路徑。做出此決定的主要原因是我們的原型生產方式與最終生產方式不同，因為原型使用了 3D 打印。 從頭開始，創建了一個名為 PROTO Alpha Case 的產品項目（圖 37）（Alpha Case 是產品的名稱）。從現在開始，我們將原型產品稱為\"原型項目\"。正如我們所看到的，這允許對原型項目進行很好的表示。由於它是一個原型，因此它不會被標記為可以出售或購買的東西，並且銷售價格將設置為 0 美元，因為它並不重要。這個原型項目將用於連接其開發的不同方面，但目前它被擱置一旁。 圖 37 原型產品項目的圖片 正如我們在第 3 章中之前所確立的，該產品將由 3 個零件組成：Part A、Part B 和 Part C。這些需要製作原型並創建為產品，以便可以將它們添加到 PROTO Alpha Case 的物料清單中。最後，決定使用特定的塑料長絲（見第 4.1.1 節）進行 PROTO Part A 和 PROTO Part B 和 C 的 3D 打印，並且這些也需要添加為產品（圖 38）。 圖 38 原型產品類項目的概述 在這個時候，Alpha Case 原型設計的相關產品項目已經完成，這使得創建其相關 BOM 成為可能。它們有 3 個，它們遵循（圖 39）中的結構： 圖 39 原型設計的 BOM 圖 值得一提的是，Odoo 在項目中使用了套件選項（圖 40）來推斷該產品是另一個產品的組件。這非常有趣，因為它會自動在產品項目之間創建依賴關係以進行生產。 圖 40 原型產品 BOM（Part-A）的圖片 正如讀者可以看到的（圖 41），在製作 BOM 時，可以簡單地創建製造過程所需的特定操作項目並指定其工作中心。Odoo 中關於 MES 的最佳功能之一是能夠根據默認持續時間跟踪操作時間。這可以根據跟踪時間動態更改或手動設置。我們也可以在操作項目中添加操作說明文件。即使它僅限於 PDF 文本或指向 Google 幻燈片文件的鏈接，這也是 Odoo 為直接連接到項目的文件管理提供的少數機會之一。 圖 41 Odoo 呈現的操作項目的圖片（BOM Part-A） 圖 42 為原型設計創建的 BOM 概述 說到這種缺乏上傳機會的情況，我們可以注意到，在製作產品項目時，無法將有關產品的文件直接上傳到該項目。在我們的例子中，我們有關於我們正在製作原型的零件的 CAD 文件，無法以任何方式上傳這些文件將是 PLM 方面的徹底失敗。謝天謝地，有一個解決方法。如第 5.1.3.5 節所述，ECO 是一個鏈接到產品項目或 BOM 的項目，並允許將上傳的文件附加到它。這是一個小的解決方法，但基本上意味著如果我們想以任何有意義的方式將我們的 CAD 文件上傳到項目中，我們需要發出 ECO，即使沒有進行任何\"更改\"。 圖 43 ECO 示例 只能假設這是 Odoo 團隊在其 ERP 基礎中實施 PLM 策略的一部分。這是合理的，但它仍然是這個軟件界面中為數不多的不那麼簡單的方面之一。這是一個非常有價值的功能，但它有點隱藏。文檔圖標僅在創建和保存 ECO 後才會出現在右上角（圖 43）。 圖 44 附加到 ECO 的文件的概述 由於 Odoo 和 CAD 軟件之間沒有直接集成，因此上傳文件不會對產品元數據造成任何自動更改。從 PLM 的角度來看，這並不理想，但它仍然是一個實現良好的功能。通過允許產品項目不僅直接鏈接到一個現有的 ECO，而且鏈接到應用於該項目 重點整理: Odoo 原型設計階段的優缺點 優點: 直觀的產品和 BOM 創建: Odoo 提供簡單易用的界面，可以輕鬆创建产品和 BOM，并进行管理。 BOM 與產品整合完善: BOM 和產品項目之間的整合非常緊密，修改 BOM 會直接影響產品，並自動更新相關信息。 版本控制功能: ECO 能夠有效追蹤產品和 BOM 的版本变更，方便查阅历史修改记录。 缺點： 文件管理功能不足：許多專案類型無法直接上傳文件，需要依賴ECO來變通實現，這在管理CAD文件等方面並不方便。 操作順序問題：Odoo V14 取消了「路線」功能，導致 BOM 中操作順序混亂，需要手動調整或依賴操作員的經驗。 產品與工具的差異不明確：Odoo 將模具視為產品，但無法將其與設備關聯，導致在模具開發和維護方面存在資訊斷層。 數據分析功能有限：數據分析主要集中在生產訂單的完成時間，缺乏針對品質控制等方面的數據分析和視覺化展示。 Odoo適合哪些公司使用PLM和MES功能？ 小型企業：規模縮小，對PLM和MES的需求相對簡單的公司。 以組成或主要的企業：可以充分利用Odoo的ERP功能及其與PLM、MES的整合。 總結來說，Odoo 的 PLM 和 MES 功能具有一定的可用性，但流程增加了改進空間。功能齊全的公司，可能需要考慮其他更專業的PLM 和MES 解決方案。 問: 你幫我把每個人的cd2024都填上https://github.com/(此部分是每個人的github帳號)/cd2024 google AI答: 學號,GitHub 帳號,組別,cd2024 倉儲,cd2024 網站,期中報告倉儲,期中報告網站 40923136,,, , , , 40923140,4923140,6,https://github.com/4923140/cd2024, , , 40923149,40923149r,6,https://github.com/40923149r/cd2024, , , 40923150,40923150,6,https://github.com/40923150/cd2024, , , 40923152,40923152,6,https://github.com/40923152/cd2024, , , 40923157,40923157,4,https://github.com/40923157/cd2024, , , 40971134,40971134,6,https://github.com/40971134/cd2024, , , 40971140,,, , , , 40971219,40971219,6,https://github.com/40971219/cd2024, , , 40971220,40971220,6,https://github.com/40971220/cd2024, , , 41023132,BX41023132,8,https://github.com/BX41023132/cd2024, , , 41039138,GUJIAFENG,8,https://github.com/GUJIAFENG/cd2024, , , 41123201,Peichen1128,4,https://github.com/Peichen1128/cd2024, , , 41123202,Yunjia822,5,https://github.com/Yunjia822/cd2024, , , 41123203,S1u2a3n4,5,https://github.com/S1u2a3n4/cd2024, , , 41123204,\"warsplte\",1,https://github.com/warsplte/cd2024, , , 41123205,\"41123205WANG-ZE-XIANG\",7,https://github.com/41123205WANG-ZE-XIANG/cd2024, , , 41123206,kaoruSam,,https://github.com/kaoruSam/cd2024, , , 41123207,41123207Andy,4,https://github.com/41123207Andy/cd2024, , , 41123208,jas41123208,1,https://github.com/jas41123208/cd2024, , , 41123209,ds21137441,4,https://github.com/ds21137441/cd2024, , , 41123210,Liu16552,2,https://github.com/Liu16552/cd2024, , , 41123211,leekuchu006,1,https://github.com/leekuchu006/cd2024, , , 41123212,41123212,3,https://github.com/41123212/cd2024, , , 41123213,Njniaaaa,5,https://github.com/Njniaaaa/cd2024, , , 41123214,41123214,2,https://github.com/41123214/cd2024, , , 41123215,YanNingxue,4,https://github.com/YanNingxue/cd2024, , , 41123216,S41123216,1,https://github.com/S41123216/cd2024, , , 41123217,12tony25,1,https://github.com/12tony25/cd2024, , , 41123218,Cheennggg,1,https://github.com/Cheennggg/cd2024, , , 41123219,asd1234554321,1,https://github.com/asd1234554321/cd2024, , , 41123220,Changyou41123220,5,https://github.com/Changyou41123220/cd2024, , , 41123221,WENG-WEI-JUN,7,https://github.com/WENG-WEI-JUN/cd2024, , , 41123222,kao41123222,5,https://github.com/kao41123222/cd2024, , , 41123223,CHI-23,5,https://github.com/CHI-23/cd2024, , , 41123224,morant-4125252,2,https://github.com/morant-4125252/cd2024, , , 41123226,41123226,9,https://github.com/41123226/cd2024, , , 41123227,tianmiaox,3,https://github.com/tianmiaox/cd2024, , , 41123229,Zkamsmsmdmdm,9,https://github.com/Zkamsmsmdmdm/cd2024, , , 41123230,41123230GUANSEN,7,https://github.com/41123230GUANSEN/cd2024, , , 41123231,YanhanChenn,2,https://github.com/YanhanChenn/cd2024, , , 41123232,41123232,3,https://github.com/41123232/cd2024, , , 41123233,zeng-wei-zhi,7,https://github.com/zeng-wei-zhi/cd2024, , , 41123234,41123234,4,https://github.com/41123234/cd2024, , , 41123235,41123235,2,https://github.com/41123235/cd2024, , , 41123236,41123236,3,https://github.com/41123236/cd2024, , , 41123237,41123237-Hank,3,https://github.com/41123237-Hank/cd2024, , , 41123238,41123238,3,https://github.com/41123238/cd2024, , , 41123239,41123239yang,2,https://github.com/41123239yang/cd2024, , , 41123240,41123240,2,https://github.com/41123240/cd2024, , , 41123241,41123241,9,https://github.com/41123241/cd2024, , , 41123243,a0408258,9,https://github.com/a0408258/cd2024, , , 41123244,halo2356141,7,https://github.com/halo2356141/cd2024, , , 41123245,Xuxia1118,7,https://github.com/Xuxia1118/cd2024, , , 41123246,,, , , , 41123247,tsai1201,7,https://github.com/tsai1201/cd2024, , , 41123248,BA930420,7,https://github.com/BA930420/cd2024, , , 41123249,41123249,9,https://github.com/41123249/cd2024, , , 41123250,41123250,9,https://github.com/41123250/cd2024, , , 41123251,41123251,9,https://github.com/41123251/cd2024, , , 41132222,41132222,2,https://github.com/41132222/cd2024, , , 41136103,41136103,1,https://github.com/41136103/cd2024, , , 41136124,41136124,5,https://github.com/41136124/cd2024, , , 41136126,,, , , , 41136131,41136131,4,https://github.com/41136131/cd2024, , , 各組組別使用以下對話 分組倉儲填上https://github.com/mdecd2024/2a-midag(個別的組別) 答: 學號,GitHub 帳號,組別,cd2024 倉儲,cd2024 網站,期中報告倉儲,期中報告網站 40923136,,,https://github.com/mdecd2024/2a-midag, , , 40923140,4923140,6,https://github.com/4923140/cd2024, , https://github.com/mdecd2024/2a-midag6, 40923149,40923149r,6,https://github.com/40923149r/cd2024, , https://github.com/mdecd2024/2a-midag6, 40923150,40923150,6,https://github.com/40923150/cd2024, , https://github.com/mdecd2024/2a-midag6, 40923152,40923152,6,https://github.com/40923152/cd2024, , https://github.com/mdecd2024/2a-midag6, 40923157,40923157,4,https://github.com/40923157/cd2024, , https://github.com/mdecd2024/2a-midag4, 40971134,40971134,6,https://github.com/40971134/cd2024, , https://github.com/mdecd2024/2a-midag6, 40971140,,,https://github.com/mdecd2024/2a-midag, , , 40971219,40971219,6,https://github.com/40971219/cd2024, , https://github.com/mdecd2024/2a-midag6, 40971220,40971220,6,https://github.com/40971220/cd2024, , https://github.com/mdecd2024/2a-midag6, 41023132,BX41023132,8,https://github.com/BX41023132/cd2024, , https://github.com/mdecd2024/2a-midag8, 41039138,GUJIAFENG,8,https://github.com/GUJIAFENG/cd2024, , https://github.com/mdecd2024/2a-midag8, 41123201,Peichen1128,4,https://github.com/Peichen1128/cd2024, , https://github.com/mdecd2024/2a-midag4, 41123202,Yunjia822,5,https://github.com/Yunjia822/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123203,S1u2a3n4,5,https://github.com/S1u2a3n4/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123204,\"warsplte\",1,https://github.com/warsplte/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123205,\"41123205WANG-ZE-XIANG\",7,https://github.com/41123205WANG-ZE-XIANG/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123206,kaoruSam,,https://github.com/kaoruSam/cd2024, , https://github.com/mdecd2024/2a-midag, 41123207,41123207Andy,4,https://github.com/41123207Andy/cd2024, , https://github.com/mdecd2024/2a-midag4, 41123208,jas41123208,1,https://github.com/jas41123208/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123209,ds21137441,4,https://github.com/ds21137441/cd2024, , https://github.com/mdecd2024/2a-midag4, 41123210,Liu16552,2,https://github.com/Liu16552/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123211,leekuchu006,1,https://github.com/leekuchu006/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123212,41123212,3,https://github.com/41123212/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123213,Njniaaaa,5,https://github.com/Njniaaaa/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123214,41123214,2,https://github.com/41123214/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123215,YanNingxue,4,https://github.com/YanNingxue/cd2024, , https://github.com/mdecd2024/2a-midag4, 41123216,S41123216,1,https://github.com/S41123216/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123217,12tony25,1,https://github.com/12tony25/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123218,Cheennggg,1,https://github.com/Cheennggg/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123219,asd1234554321,1,https://github.com/asd1234554321/cd2024, , https://github.com/mdecd2024/2a-midag1, 41123220,Changyou41123220,5,https://github.com/Changyou41123220/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123221,WENG-WEI-JUN,7,https://github.com/WENG-WEI-JUN/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123222,kao41123222,5,https://github.com/kao41123222/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123223,CHI-23,5,https://github.com/CHI-23/cd2024, , https://github.com/mdecd2024/2a-midag5, 41123224,morant-4125252,2,https://github.com/morant-4125252/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123226,41123226,9,https://github.com/41123226/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123227,tianmiaox,3,https://github.com/tianmiaox/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123229,Zkamsmsmdmdm,9,https://github.com/Zkamsmsmdmdm/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123230,41123230GUANSEN,7,https://github.com/41123230GUANSEN/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123231,YanhanChenn,2,https://github.com/YanhanChenn/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123232,41123232,3,https://github.com/41123232/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123233,zeng-wei-zhi,7,https://github.com/zeng-wei-zhi/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123234,41123234,4,https://github.com/41123234/cd2024, , https://github.com/mdecd2024/2a-midag4, 41123235,41123235,2,https://github.com/41123235/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123236,41123236,3,https://github.com/41123236/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123237,41123237-Hank,3,https://github.com/41123237-Hank/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123238,41123238,3,https://github.com/41123238/cd2024, , https://github.com/mdecd2024/2a-midag3, 41123239,41123239yang,2,https://github.com/41123239yang/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123240,41123240,2,https://github.com/41123240/cd2024, , https://github.com/mdecd2024/2a-midag2, 41123241,41123241,9,https://github.com/41123241/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123243,a0408258,9,https://github.com/a0408258/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123244,halo2356141,7,https://github.com/halo2356141/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123245,Xuxia1118,7,https://github.com/Xuxia1118/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123246,,, , , , 41123247,tsai1201,7,https://github.com/tsai1201/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123248,BA930420,7,https://github.com/BA930420/cd2024, , https://github.com/mdecd2024/2a-midag7, 41123249,41123249,9,https://github.com/41123249/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123250,41123250,9,https://github.com/41123250/cd2024, , https://github.com/mdecd2024/2a-midag9, 41123251,41123251,9,https://github.com/41123251/cd2024, , https://github.com/mdecd2024/2a-midag9, 41132222,41132222,2,https://github.com/41132222/cd2024, , https://github.com/mdecd2024/2a-midag2, 41136103,41136103,1,https://github.com/41136103/cd2024, , https://github.com/mdecd2024/2a-midag1, 41136124,41136124,5,https://github.com/41136124/cd2024, , https://github.com/mdecd2024/2a-midag5, 41136126,,,https://github.com/mdecd2024/2a-midag, , , 41136131,41136131,4,https://github.com/41136131/cd2024, , https://github.com/mdecd2024/2a-midag4,","tags":"w9","url":"./2024-Spring-w9-blog-tutorial.html"},{"title":"第七週日誌","text":"紀錄本學期的每週進度 W7 清明連假沒有上課","tags":"w7","url":"./2024-Spring-w7-blog-tutorial.html"},{"title":"第八週日誌","text":"-blog-tutorial Author: 40923131 紀錄本學期的每週進度 W8","tags":"w7","url":"./2024-Spring-w8.html"},{"title":"第六週日誌","text":"紀錄本學期的每週進度 W6","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"第五週日誌","text":"紀錄本學期的每週進度 W5 解決了上週無法git push的問題,並將影片連接貼至網站. 解決方法: 因為最開始commit了附有影片的內容,導致後面所有提交都無法成功並堆積在近端. 後來使用git reset HEAD~1把之前不需要的提交都刪除","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"第四週日誌","text":"紀錄本學期的每週進度 W4 上傳本週新增影片字幕的任務,但目前無法成功git push. 問題點: 不能將影片直接放在download下,會因影片檔案太大導致無法上傳 解決方法:將影片先上傳至YouTube再將連結放到網站","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"第三週日誌","text":"紀錄本學期的每週進度 W3 將個人倉儲納入分組倉儲成為子模組","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"第二週日誌","text":"紀錄本學期的每週進度 W2 新建個人倉儲","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"第一週日誌","text":"紀錄本學期的每週進度 W1","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-spring-ke-cheng.html"}]};