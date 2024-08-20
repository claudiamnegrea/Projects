import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/color';
import ImageSlider from './components/imagine-slider';
import LoadMoreData from './components/load-more-button';
import TreeView from './components/menu';
import StarRating from './components/star-rating';
import menus from './components/menu/data'
import QRCodeGenerator from './components/qr-code';
import LightDarkMode from './components/dark-mode';
import ScrollIndicator from './components/scroll';
import TabTest from './components/tabs/tab-test';
import ModalTest from './components/modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/go-to-section';

function App() {
  return (
    <div className="App">
      {/* 1. Accordian component*/}
      {/* <Accordion /> */}

      {/* 2. Random color component*/}
      {/* <RandomColor /> */}

      {/* 3. StarRating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* 4. ImageSlider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} /> */}

      {/* 5. LoadData component */}
      {/* <LoadMoreData/> */}

      {/* 6. TreeView component */}
      {/* <TreeView  menus={menus}/> */}

      {/* 7. QRCode component */}
      {/* < QRCodeGenerator/> */}

      {/* 8. Toggle mode component */}
      {/* <LightDarkMode/> */}

      {/* 9. Scroll Indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* 10. Tabs component */}
      {/* <TabTest/> */}

      {/* 11. Modal pop-up component */}
      {/* <ModalTest/> */}

      {/* 12. GitHub Profile finder component */}
      {/* <GithubProfileFinder/> */}

      {/* 13. Autocomplete & API component */}
      {/* <SearchAutocomplete/> */}

      {/* 14. Tic Tac Toe */}
      {/* <<TicTacToe/>/> */}

      {/* 15. Feature Flag */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* 16. useFetch Custom Hook */}
{/*       <UseFetchHookTest/>
 */}

      {/* 17. useOnClickOutside Custom Hook */}
        {/* <UseOnClickOutsideTest/> */}

      {/* 18. useWindowResize */}
      {/* <UseWindowResizeTest/> */}
      {/* 19. Scroll to Top and Bottom */}
        {/* <ScrollToTopAndBottom/> */}
    
      {/* 20. Scroll to Particular Section */}
        <ScrollToSection/>
    </div>
  );
}


export default App;
