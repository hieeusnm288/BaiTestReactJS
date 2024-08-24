import React from "react";
import "./HomeStyle.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <div className="home-page ">
      <Header />
      <section className="container mx-auto h-full position-relative banner">
        <div className="d-xl-flex flex-row align-items-center h-full pt-pd ">
          <div className="text-start position-absolute">
            <h1 className="font-size max-w-700 mb">
              Save your data storage here.
            </h1>
            <p className="sub-content max-w-380">
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button className="btn btn-quaternary">Learn More</button>
          </div>
          <div className="position-absolute image-banner bottom right">
            <img
              src="https://warehouse-blue.vercel.app/static/media/hero-img.d06ff33bd5f804baba29.png"
              alt="Banner"
            />
          </div>
        </div>
      </section>
      <section className="high-level my mt-100">
        <div className="container mx-auto">
          <div className="d-flex align-items-center text-center high-level-style">
            <div className="flex-1">
              <img
                src="https://warehouse-blue.vercel.app/static/media/about.1c3d05a0bef752a3afb9.png"
                alt="anh"
              />
            </div>
            <div className="flex-1 pr-12">
              <h2 className="text-content mx-auto">
                We are a high-level data storage bank
              </h2>
              <p>
                The place to store various data that you can access at any time
                through the internet and where you can carry it. This very
                flexible storage area has a high level of security. To enter
                into your own data you must enter the password that you created
                when you registered in this Data Warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="features container">
        <div className="container mx-auto">
          <div className="text-content">
            <h2 className="text-title">Features</h2>
            <p className="sub-title mx-auto">
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </div>
          <div className="content">
            <div className="w-full box-content">
              <div className="content-1">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature1_bg.02fab76ed86ad763f03f.png"
                  alt=""
                />
              </div>
              <div className="content-2">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature1.3bd68cd8e4cd29a40d80.png"
                  alt=""
                />
              </div>
              <div className="content-3">
                <h3 className="title-content-3">Search Data</h3>
                <p className="sub-content-3">
                  Don’t worry if your data is very large, the Data Warehouse
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </p>
                <div className="button-content">
                  <a className="a-text" href="/">
                    Learn more
                  </a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full box-content">
              <div className="content-1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbsAAAFmCAYAAAD0yTTvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACT0SURBVHgB7d0LcJxnfe/x5333vqtdXR3bxA4xboixlNOmpgQJkhIgJ057TuNT2zJtSg4JNXOAtHWqHJjMML5kMsOEiUk4TdvDuIRb0xY5YQIDxCYk0ITKpymXA5Ech5tD5Fx8k6yVVnt/3+5/7XUU48ve3nff993vZ4ZZSbawMRr99H+e3/O8moLtRjeO+pQaDKpFIV9qPuXXjYBPM/0++TUt4vMpAHAYM10s+iNRI59JmoaeL8aisULp+1fh0hcuLVz7Pa2gHE5TsJRpmtru4YlAbsnScHEmHSh9kQT8wQ7+3QF4RiE3Z5Z+aM9HOoJZdfRIbnj3QE45DN90LXAy4A6F84F4OBecDhFuANqJhF/pJSP/ueULKzLKAfgm3ESjG8eDMsHlZ5NRAg4ASj/868ViMZPOxVKXzg7v1oqqRfiG3AQSculIV1wPh4IKAHBWRiabK23lpFox7RF2DRi9fTKSORaIUyoBgOrJtBeO5GeH71ueVjYh7OrAJAcAjZNJL5K++IQdy5uEXQ2kePKFW17oLO3HRRQAoCm0lJ4K5npSVoYeYVelL73/1VjRl45TPAGA5rN6aZNv3BfANAcA9pEp788e6k2qJiPszuOza34QiKxe1k0BBQDsU57yji8+3sxlTV3hrD77oR9Eg1f09hJ0AGAvzfD5Mr2He7/7LtOvmoTJ7iw+d+uBeNDf26EAAC1lpovJm7+8JKUaxGR3BoIOAJyjtLqWkO/LqkFMdgsQdADgTLnC8bkPPrhqVtWJsDuFoAMAZ2sk8Ag7RdABgFvUu4fX9mEnh8VlTVgBAFyhkJubrvUy6bYuqMg5OoIOANwl5F/UObrRrOlYWNPOMLiN/ENlwoe7FQDAVYp6Wi/0zvWapnlU0zSzms9p28mu0D3LzSgA4FJy8Fyucqz297dl2EkhpaiyAQUAcC25s1h6F9X83rYLO1m+pHkJAN7gD3V0VLN/13ZhV9qn61UAAE+Q/bt05KWuC/2+tgq70dsnI+zTAYC36OFQsDTdBc/7e1SbKLcvjwUavl8NAOA8md7D553u2ibsckumYkx1AOBN0s4c/ciRc/Yx2iLsZKozs0ZVjR0AgDsVctGYaZpnvRmsLcIuFXuB5UsA8Dgpq+z+6NGzDjaeDzuZ6nzFSFABADxPpruzfdz7k92yQ0H26gCgPch0d7ZmpufDjgYmALSXdOSl3/i+7+mwG904zlQHAG3m1Lm7133v93TYpWKxqAIAtJ9FRyML3/V02FFMAYD2lDGM1w07ng07ljABoH2VD5kvWMr0bNjlliwNKwBA28qED5/OAe+G3dxUSAEA2papFbwddtu3b9cDgS6/AgC0rUDwtRzwZNitnthA0AFAm5MD5t99l1nOA28uYy66iBYmAEAdvfJQQF49GXZ5Mx1QAIC2lytEvRt22UyOZUwAgNKOnzyC5smwo5wCABDFRMabk91nP/QDljABAGVyuFxePRd2wVwvt6YAAE6Tm1Q8F3axaIwlTADA63gu7GhiAgDO4L3JjiYmAOBMngs7mpgAgDN5KuxoYgIAzsZTYUcTEwBwNp4KO5qYAICz8VTY0cQEAJyNp8KOJiYA4Gw8FXY0MQEAZ+OZsKOJCQA4F8+EHU1MAMC5eCbsaGICAM7FM2FHExMAcC6eCTuamACAc/FM2NHEBACciyfCjiYmAOB8PBF2NDEBAOfjibCjiQkAOB9PhB1NTADA+Xgi7GhiAgDOxxNhRxMTAHA+rg87mpgAgAtxfdjRxAQAXIjrwy4QTwQVAADn4fqwK87QxAQAnJ/7w86X9tQDaAEAzefqoNi+fbtOExMAcCGuDrvVExsIOgDABbk67FKxGEuYAIALcnVY0MQEAFTD1WFHExMAUA13hx1NTABAFVwbFjQxAQDVcm3Y0cQEAFTLtWFHExMAUC3XBgZNTABAtVwbdjQxAQDVcm/Y0cQEAFTJlYFBExMAUAtXhh1NTABALVwZdjQxAQC1cGVo0MQEANTClWFHExMAUAt3hh1NTABADVwXGjQxAQC1cl3Y0cQEANTKdWGXCfexXwcAqInrwk7vCvgUAAA1cF3Y0cQEANTKdWFn6HnCDgBQE1eFnTQx/cEOTQEAUANXhR1NTABAPVwVdjQxAQD1cFXY0cQEANTDVWFHExMAUA9XhR1NTABAPVwTdjQxAQD1ck3Y0cQEANTLNWFHExMAUC/XhB1NTABAvVwTdjQxAQD1ck3Y0cQEANTLFWFHExMA0AhXhB1NTABAI1wRdjQxAQCNcEXY0cQEADTCFWFHExMA0AhXhB1NTABAIxwfdjQxAQCNcnzY0cQEADTK8WFHExMA0CjHhx1NTABAoxwfdjQxAQCNcnzY0cQEADTK0WFHExMA0AyODjuamACAZnB02NHEBAA0g6PDjiYmAKAZHB12NDEBAM3g6LCjiQkAaAbHhh1NTABAszg27GhiAgCaxbFhRxMTANAsjg07mpgAgGZxbNjRxAQANItjw44mJgCgWRwZdjQxAQDN5Miwo4kJAGgmR4YdTUwAQDM5MuxoYgIAmsmRYUcTEwDQTI4MO5qYAIBmclzY0cQEADSb48KOJiYAoNkcF3Y0MQEAzea4sKOJCQBoNseFHU1MAECzOS7saGICAJrNUWFHExMAYAVHhR1NTACAFRwVdjQxAQBWcFTY0cQEAFjBUWFHExMAYAVHhR1NTACAFRwTdjQxAQBWcUzY0cQEAFjFMWFHExMAYBXHhB1NTACAVRwTdjQxAQBWcUzY0cQEAFjFEWFHExMAYCVHhB1NTACAlRwRdjQxAQBWckTY+TqyQQUAgEUcEXaFlM9xD5EFAHiHI0KGJiYAwEotL4Z89kM/CPgVTUwAgHVaPtl1T4cJOgCApVoedjQxAQBWa3nY0cQEAFit5WFHExMAYLWWBw1NTACA1VraxqSJCQCwQ0snO5qYAAA7tDTsaGICAOzQ0rCjiQkAsENLw44mJgDADi0NG5qYAAA7tKyNSRMTAGCXlk12NDEBAHZpWdjRxAQA2KVlYUcTEwBgl5aFHU1MAIBdWhY4NDEBAHZpSRuTJiYAwE4tmeyCuV6fAgDAJi0Ju1g01tKnLQAA2ktLwi5vptmvAwDYpiVhl83kmOwAALZpSdgFAl2EHQDANraHnTQxFQAANrI97GhiAgDsZnvY0cQEANjN9rCjiQkAsJvtYUcTEwBgN9vDjiYmAMButoYdTUwAQCvYGnY0MQEArWDrkqI0MbMFBcBFVr03lIgs9nfGu7VER5dvuT/oS+gB1enzKXlN6LqekN+n6WanpmuJhZ9rFNSkYRhJI6+S+YyaTCULh+TjU68UJ3/8UGpSATaxNexONjGjCoBzVMJs6Qp/fzDmWx6K6qsluHx+rb/0y6UAU4lzfa5pqKRpmsnyO4aaMSpvn+ILqHf4NT2hRVUi0qlUYnGw/PGllynVf01EPr8UhmrSNMxkPm1OpJPFiWzGTL70/7PjB76TTSqgSWx9ptyDt/x8EQUVoHWuvCm2fPnlocFQXPWXwmy5BFopzJYv/D3lACuak4WiOlQKoRdlKiuWpjKzYM7MTpmH5qbzyeThwkytYfS20p/duyy4TN6OdGkDWmky9AXVcr3099BLfwfdpy078+9RCsLxQs6YKE2Fh2aPFyYIQdQjNN133Naw+/KHji5VAGwhE9vFvxMa6FriHwxG9MFSoAwsnNKMonmokDPHijk1KWGWPGJMvHwgPdnKMHn3bV39oZiWkDD0hdUyX6D06isH8um/t0yDxYI5IZPgiSOFfQQgLsTWsJMmZlS9sU8BsEQl3Hou9l/vD+qlyU0NVX7NyJfCIW+O5WfVhBNCrVbyv23Fmmi/hKA/qg35fWqZHigvs5aZ5QlQTaRnjX0nXs1NPPXA3IQCTrE17D7/gYNhf7CjWwFoGgmBVe+JbYok9Osrk5ss/8nkU0ybY3PHzbGDP5yf8OLkc2YABoLa6sqSbGX6m58x97z6XHbfM5Rh2pqtYTf6kSMd2YIWVwAasjDgKtObLEnms+Zjc6+ae7wabtWQZdDEEr0/2KGGAiF9cGH4lSa/sWOTud1P3JscU2grtobdQx/+dbdRjIYVgJpJwL35mtjaWK8+XAm40n7bPpnefv2T7CiTy9mdDr+4dkNp8hus7P2V/u32MPW1D1vDjiYmULt3fDg+8IY3BzYGw/qmyhJlbtbYRcDV54aPdw/Gl2qbFk59xYIaS00bowSfd9kadjQxgeq9547E0EUrgn8tU1x5Dy5vjs28ZOx67J7pfQpNIVNf70p9OBDQhipll0rw/ex7qT00PL3DtrCjiQlU58yQkynu2W+ndvGN11pyBvCNbw39eWmCXluZ+PIZ9RX2+LzBtrCjiQmc3xkhN5k6buw8wHTREmcudcr/H7Ol/z9Y5nQv28KOJiZwdmcLuUc/MTWq4Ajr7u4ZDndpm/wBbVDeZ9pzJ9vCjiYm8HrSrrziD+MjoajaLMuV6RPGzq/eObVLwZFkmfPS3wuNnDntfZ0fTFzBtrCjiQm85g+2da7tXhK4X9qV+Xlj10++mdrJcqV7yLQX69VHWOJ0D9vCjiYmcHKa+50/it/vD6m1ckbuyPPFrU8+cIJrrVxK9vY6l+t3yBKnhF4mZYxO/pgjIU5kS9jRxARO7s0tWRm8T6aB+SljG0uW3lFZ4gxG9GFCz5kk7Cx/cvj6K+4M6r5gRAFtat0nezb3LvP/vTJV8pXxwoZvfXJ6j4JnvPRsPjmxJ70n3KmNJhb7lodj+uae5YG1b7423BlfpB+SX1doKX8mmrZ8sqOJiXa28b6+HVJCyaeN0Z98I7WVvTnvO3PSo8jSerYsY9LERDuS/bkr/0f8QTlSkJ01du6+Y2qnQluR0HvT28M7/EFtLaHXWraEHU1MtBsJujXr4w+X9ucG5o4aWzg3195u3Np9fcdS312yX2sU1MQvxtK3sp9nL1vCjiYm2glBh3NZeGRBDqcffCb9aULPHpYXVKSJGVBdUQW0ietGuh/SfWoNQYczHXgyPRHp0vZ29AZUMKpulhLLisFw8vnSxxUsZXlBhTsx0U4qZRSOFuBCZD/vsndGZAVguTxb71f/L7ONKc86MtnpykKxaIy9OrSF9Z/qKV/9JWUUgg4XIsH20IePXTU/Vdjm82v9l10dfnzdPT2bFSxj6TLmurfeFjPNAIEHT5Of0pdcHnwwlzH37v7rqY8roErPPZH5kSxtJhb7LorE9dv6b4gORru1fZzNay5ZxrR0sstmcgQdPE+Wo6Ra/sIzma0KqJFMeaNbprbIPq9eWtZkyrOGpZPdhrdt7VSAh8nyZSCirU0dM7Y98ZkkTxFH3SoFlu5lgd8NR7Wb33JddFmsV9vPlNc4mewsCzuamPC608uXaWP0kY9xaByNk2Ab/9b86OXXhFWwQytfO7ZsIDTxi3/LHFKom6XLmMFcr+X3bgKtJFdCyesL/5El6NBUu0s/PP3sqfRV8nbvm3yPrL+3Z0ShIZaFHU1MeJlMdXL3oUx1VMZhBfm6+uE/Za/Lzqldkbg+8r6/6X1Qvu4U6mJZ2OXNdEABHsVUBzsceHo2uXvk2DY5oiB3bEoZisCrj2VhRxMTXhYI6YNyGJipDnb46p0ndlWWNWlr1seysOPyZ3iVPIhVbr6YO2xwHRhsIz9Y/fz76Q3K1F7s6NJ3sI9XG0tKJDQx4WVvXR//c39QrXn4Y1MfVoCNpK357Dfnv3z5tdFEOK7ddvl7ogljvvijYy8WswrnZFkbkyYmvCwYVoOFvMmZOrSM7ONlZ4ydckXdmj+Ns49XBUvCjiYmvGrV1fGE5lcD+XlzTAEtJMcTZl8q3qI0dQnFlQuzJOxoYsKrLr5KG5DXbNLksSxoua/dNb33lfHCenmbwDs/S8KOJia8KhL1xeV1/kSeFiYc4ckHTkyUiyvqZFPz3bd19Cv8BkvCjiYmvMof0S6R15d/QtjBORY0NWeWDoQeIfB+U9PDTpqYCvAon08l5PXA01ku54WjLAy8N1wRfnzd3T3DCqc1PexoYgJAa1SuGDMNNd6xSL+fwHtN08OOJiYAtI5cMVYKvA0E3us1PexoYsLL8hlV3quj9QYnWxh4sT7tLvbwLAg7mphoBx3dWkIBDlYJPEorJzU97GhiwsvmjuTK5+s6LgrSdoPjSeAtbGm284pEU8OOJia87uWfaOVlzFBcEXZwhYUtzXY+eN7UsKOJCa+Tn5TNghr3B3XCDq5xOvA01SmBt+rqUNstwzc17Ghioh3kMmqf7jMH2vEbBtxLAq98tVgp8OTy6Hb7+m1q2NHERDuYO1Lco2laYsVQlOkOriJXi6WOGVs1XQ389ob4DtVGmhp2NDHRDh67Z3qfaapk5zKdp0XDdR79xNSoPB4oEFab2ukBsE0NO5qYaBe5lPqKL6CGWMqEG8njgbJzalckro+0y6HzpoUdTUy0k8pSZv+NMaY7uJI8ALadDp03LexoYqKdyFJmsaDGwh3aZqY7uNXPv5/+YPkMXn/4Qa9/HTct7ALxRFABbeTEi8WdTHdws3JDc6Jwq6ar5Ve+L/6g8rCmhV1xhiYm2gvTHbxAGprzU4VtPr8aWndPj2d/cGte2PnSljwIFnAypjt4wVfvPLErlzZGO7r0HTd8vHtQeVBT9tm2b9+u981fw0+2aDu/+LfMocuvjSbCce22cKc2+tKzeR7qClcqpvxjSwf8N0a69LX5ZHH02IvFrPIIfybanGls9cQGjhygbT37aHannLtbORS5TwEuJVfhVfbvfme4437lMU0Ju1QsxhIm2pZ8k5h7ufhXXt/zgPdV9u/8QW2t176WmxJSNDHR7r521/Rer+95oD3I/p0Ur2Kd2oiXnpDQlLCjiQko9dNH8ltNQ032XOq7nyeZw81+OZa+XSlNeWlpvjlhRxMTOL3nceoxKp9TgEvJ+bv0dGGnl5bmG25j0sQEXnPwmczRlW8PHwl1aDe/5brosok983sV4ELPPZH5Uf8N0cFQRK2LdOpfc3PTuCltTJqYwOu1663y8B4vLWc2PNn9wdv+d0D3BSMKwGn7H0/vq5y/u+xdYfXct9P7FOAyMs1d9o5gNhTTb7707eHJ559MTygXaspkRxMTODu5VV4amvIYFSY8uFWlnRnv0+5y87V4DYcdTUzg3Ea3TG0h8OB2h58rbJNr8a7447hrv4YbDzuamMB5EXhwOzlsLg97DUXVZreeI20oqKSJydPJgQuTwKs8GZrAgxtVrsXrusTnyq/fhgoqH1n0QKAY6YgqABe0/9vz37v8mrAKJ/QRqXRHu7V9XBwNtzj2Yi5bKaus+N3Q+PP/mvmlcgkpqDQUdjQxgdpIS/O33hFMyjeMnuWBtZEubS+BB7c4ffYuoa9z05MRGm5j0sQEaifttp89lb5K3n7zNZF/5/JouEn5GY66Wu62Zzg2NNnduOovOzS/vynPxAPaiUxzMtXFL/J1lvbxblt9faQ/2qP/iCkPTifPcJTpLhBWN+RnjC+5YbpreLKjiQnUT+4flOKKPFLFF9CGLntn5GGmPLhBebrTtISbpru6pzLuxASaQ/ZBIp3a1xKLfctlyrviD6PDF73Fv//gWHZSAQ4k092q94aXh6LaJjdMdw0VVGhiAs0jy5cTe9J73vT28GQwqg3F+3yb5SLpWK+2n6VNOFGsV5/ouzRwW/eKQNbp1+E1FHb/fc3WsBbQQwpA0xx4Mj3x7Dfn/+FUY/PG0jeTEQm9JQP+WSY9OIn8EOaW6a6hsFv/+3dGVNGkjQlYoLy02aXt7ejyJQNRba1MeqXlzetXDIazmm5MHvuVOyrf8Da3THcSdpqq0xdvPtSrh0OEHWCDdXf3DJe+sYxI5ds0VLKQU48dm8ztfuLe5JgCWmj4/p77A2Ft7Q8fmnvbgaezjlxyD033Ha97srvxyr/o1H3BusMSQPUqy5sX94fG/BEVDoRO7uuVpr3Nq/9rdOXKd4Y7O5fqSfb3YLdLfjs8E+3Rb3bydFf3ZCdNzJUvf3SxAtAyN27tvj7Uo90QCOmDMvHJx0pT33guY+xLHS/umztRnHzqgTlXPn8M7vInf9v3sO4zB5w63clkV1fYjW4cD2a7F/cqAI7w7tu6+rsu1oeCcW2tz6f1l8KvfCxIljyNUgAWcsZEPqMOzR4vlF6NGUIQzSRPQuh9k++RuSlj26N3Tu1SDlN32H3p/a/GtIiPM3aAQ0n4JZbo/YGY6vcFtIGFAVghQVh6edGQQCyoyULWOCQfL4XiZCFXTGYzZvkn9KlXiuUWaPpwYebAd5y5J4PWk+lOXv/5o8c2KIepO+z+8S+OJ8ysEVMAXGPVe0OJFWui/cGQSvg7tAE9oBIShPJremkZVPdpy6r97zoVlDOn3p0xTr5fJsFZfjWMpJE/+XEJUHlNJQvlQJUAJTy9RUpUHYv0+4//qrj+sXumHbV3V3fY0cQEvEkCMbHY39nRHUiEYlp5Eiy9lvcDfeGT+4JCglLTVGf5HU3r1H2vTY36qf1DuU7qzGnybErBOVkKy0nTMJP5tDlRLKqkLLdKIP74oRRnC11i1dXxxJqbQs8YRTXutOmu7rD7/AcOLvEHO2hiAqjK226KlQOwd1mwPD1KgJYCs1MrhaQvWJoq/aX3lUroAa1/4edV9hxlWszOG/slBDlu4VzrP9UzEunUR37wj7OrnFRUqSvsaGICsJIEo4RipKu01xhWy86251gsqLFcyth34khhH+HnHDLdvfXPQgfSs8bOR+6Y2qkcoq6wo4kJoBUkBJeuDK4OdmtDEoD+gDYoH5fpr1gwx+ZnzD2vPpfd9wxLny1VOYbw0P86vko5RF1hRxMTgBPI/uLlQ9HBM88aytSXmjZGv/6JqVEF21WOITipqFJX2NHEBOBEctyid6U+HAzra09dqzZZyKmxg8+kP820Z59KUaWQVY995a+O3a4coK6wo4kJwOlkuogv1TYFI/qwvC/T3pGDuU+zv2ePjTv7dgRj5ian3KhS192Y3IkJwOnk4aLyfMBwpzYaivomQrHTT44YXjEYTj7/ZJobZCz0xitDWbkvs2Nx4BfPf7f1/9Y1341JExOAWy18coRMer8cS9/O8qZ1bvq/fQeccuau5smOp5MDcKvKkyPkafAy6VUejMvT4K2x6troIn/IfLcTHuxa88NbeTo5ALeT0MsnfaO9b9SzwQ5tc8/ywNqV14S1A99J/0ihaZy0lClhp9fyCXpXoO7n3wGAUxx4eja5+2NTO3/2VPqqfNbY19Gl75DzYZWbXtA4OXZgmioZ7dbWKgeoKeyKM+mAAgCPkD270S1TW+aOGlvkTs/Lrg4/vu6ens0KTZFLqa/4Ampo1dWhlp/NrinsDD1P2AHwnEc/MTX68++nNxhFbVymvE2f6bvPCd+g3W7uSHGPXAi+Yijar1qs6mVJaWL2zb+zQwGAB0lJZfxb86OXXxNWspe3dCB0Y6RL20t5pX5+PZBceoX/Zl9YZffvTX9PtUhNe3arJzb4FQB4nOzlyVVX8vZl74w8LAfUFeoie6Ny/EButVEtVnXYZcJ9LGECaAtSrpBlTXlb7nlkH69+6aSxV842trr8U3XY0cQE0E6kvPLDf8peV8iqPbKPt/7enhGFmiVfypWvaFtyeailE3LVYUcTE0C7kWW4f/nLY7dm59SuSFwfIfBq9+QDcxNyBCHSqbsj7GhiAmhXu0eObcvOGDsJvPoU8+aYP6iGVAtVFXbSxPQHO7j8GUDbkuIKgVefzJy5T/btWnmco6qwo4kJAARevbInzHF5/a3fj7Zsuqsq7FKxWE2HzwHAqwi82h0cK5Tvxoz0ai3bt6sqxHzFCE1MADhFAi+XNkYl8OTRQQrnJUUfs6DGfX6tZccPqgq7cFxnvw4AFpA7NeW5eB2L9Ps5eH5h+byxX+7JVC1S3fJkwc9kBwBn+PG/ZG81DTXZs0L/PE9MOL9cWk3IPZmtKqmwFwcAdZLluZM3rWjlq8W4PPrcCmnzRXlt1aXQhB0ANEBuWpk6WLxFqvVXvi/+oMJZHfllbr+8hrq0AdUChB0ANEju0pyfKmzz+dXQxvv6dij8BvmhQG5SCYTVMtUChB0ANMFX7zyxS44khKJqMxdHn0NRvdiqRiZhBwBNUjmSIBdHcyThNxUN85CuOzns/IWiAgBc0E8fyW81DTUe69PuevdtHS1/QreTGEUzqflM28Nu0VFlVBV2mVnDVACACzrV0PygMrWZpf3hBzmS8JpiTk3K8QNls3d9VxWrO1SeyRsKAFAVKWNUHv4qRxIIvJPyGTUpr3b/e5QC1qwq7Ka7DxcUAKBqEnivTBRuVZrqLAXe5ziD1xo+FcrLa1Vh1z29hskOAGr05AMnJk6dwRtY86fxh1WbSyULh+S1d1nQtuMH/qJZzq+qwm54t1Ys5ObYtwOAGskZvLmjxhYJvE2f6btPwVa5aKG8Mln10QPdCOQVAKBmj35ialTO4AXCahOBZ6+gv6f6ZUzh64wQdgBQp8pz8CTweA6efRb9WNUWdvnZZE4BAOrGg1/t5TMixrXf02pbxvz1pV8k7ACgQQSeffxm8fSKZNVht337dsPIZAk8AGgQgWePTC6drbxd092YkY5gVgEAGtaOgRdL+MtHDo4fyh1SNghnFmcqb9d2EfTRRUx2ANAk7RZ4gbAq35wiB+6VxeQwuRybq7xfU9iVPjFnpotcCg0ATbIw8Lx+LEH36QnTNJPKBoX0fPp1f7aqUTiuzysAQNMsPJbwvr/pfdCrV4v5w6q/WFATygYLlzBFzWG3/6K/I+wAoMkk8ORp5/6gtlauFvPi5dG6Tw0U8+a4slioGMwuXMIs/9mqRrQyAcAa8rTz2ZeKtyhNXeK1pyW8547EkKapRPq4uU9ZLZFIn/mhup5UHklfPKsAAE33tbum974yXlgvb0vgeeUBsD1Lg9fL6y/+dX5MWcjUi8Xh+7TmhJ0UVZjuAMAa8rSEyvPw3nBF+PF19/RsVi4XjKq1hZy558DTWUsLKuHI4rMOY3WFnWC6AwDrVB4AWyyosY4ufYebjyb80d09w5quls8dNkaVhc411Ym6w47pDgCsJYH3zx89tqFyNOFP/rbPlft4sW592DTU5Dfunt6jLHSuqU7UHXaC6Q4ArFdpavr8ashtxRUppsjfO3Xc2KksdL6pTjQUdjLd6XOBjAIAWEqamj97Kn2VvP3mayL/7pZlzSUrg/fJVCfP9FMWOt9UJxoKOxHIdyZ5ijkAWK+yj5dLG6NuWNZc98mezbJXZ/VUF1K++fNNdUJTTfCl978a0yI+T574BwAn+uNPdm2OdPtHlKlmZkth8nWLJ6daSQiXllwfz2eNPaNbprYoi8jyZfj44uNnHiI/U8OTnbj5y0tSlFUAwD6yrPnzp9PXyduJRfr9cq+mk6Y82Vssvcy88B9ZS6c6Wb68UNCJpoSdiKQvPsEl0QBgH1nWfOjDx64qXzMWUjdcdnX4cSfs5W28r2+HLF/OvJrfZuUTDqpZvqxoyjJmxehGM5jtPtarAAC2kqnu0t8LjQQjJ2v+rVraXP+pnpFIpz6SnTV27r5jyrKpTpYv3//3i49qmlZVZ6SpYSdGP2J2ZAvH4goAYLsbt3Zf37HUd5dMVhJ6r/4yd/sT9yYtvaJLrHpvKPFf/lvsLglbq4NOSpGx1KVHq1m+rGh62InPf+Bglz/YEVEAgJZYd3fPcKxXH5HQk1tYUtPGqFWT3qkyyudKf9aA1UEnSmE3fcsXVtR07M2SsBNfvPlQrx4OBRUAoGUWhp5MeqkTxj+8PJ7d04y9NJnm+tfGNodjevnuztIe3ZZv7Jix9JaUkL9vdvjvtDlVI8vCbvv27folv76pNxDo8isAQEtJ6IW7tE3+gDYo78u0l04ae6deyo099cBcTQ9UlVtRupb4ByXkSiGakHN/P/1GauuB71h7yXO9QScsCztB4AGAs8iS47KB0NpwXBvWA1r58UGliS9pGGo8lzL25TOl6S9ZOLTwc0JhLRGM+ZaHovpqf1ANyZQoHy/kzH0zh4x7H7tn2vJn1DUSdMLSsBMEHgA4kwTfG94SGgx2qCG/X+uvhN+5SCjmSwFXmDfH9j+R+orVk1xFo0EnLA87IYH3xhf+Z4LSCgA4mwRg77LgsoUfy6bM5MsH0pN2hdtCZrqYlItLVINsCbsKjiUAAKpx6njBlDxwQDWBrWEn5B7Noi8dL015tv/ZAADn86lQ3j8dn67lHN2FtCRwRjeavkz4cK8W8fkUAACnaCE9ddP/6Zmt9maUqv97VQuxrAkAEKeeXnCiWcuWZ2r5UiJTHgC0N6umudf9GcohSqEXKYVenNADgPYQKgazKpmYs2qaW8hRJRGZ8tQiFcnMHo4SegDgTXaGXIUjG5Hl0FMqyKQHAN7RipCrcHz9X5Y3VSIZyfpyIQUAcBU5LxeIJ+aDr/ZkWhFyFa4561aZ9gg+AHC28oHwYGdaTXenN46qvJXFk2q58mC3aZraF255IVT6xwwVVDpQVMGAAgC0RDncfD05FUrk1FGVa+UEdy6euMVEwm/3sAqU9vgC4biu5U8EA4GIpilDL+/3ZQMZLqEGgDqVw0zrK99mks8WC4EOw8ikc4VwZrFR+lCumTedWOU/AUOA3wUHc0tJAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div className="content-2">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature2.aa8cfbcff7c4975f6f37.png"
                  alt=""
                />
              </div>
              <div className="content-3">
                <h3 className="title-content-3">24 Hours Access</h3>
                <p className="sub-content-3">
                  Access is given 24 hours a full morning to night and meet
                  again in the morning, giving you comfort when you need data
                  when urgent
                </p>
                <div className="button-content">
                  <a className="a-text" href="/">
                    Learn more
                  </a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full box-content">
              <div className="content-1">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="content-2">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature3.d41c5afe07c670d96f41.png"
                  alt=""
                />
              </div>
              <div className="content-3">
                <h3 className="title-content-3">Print Out</h3>
                <p className="sub-content-3">
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </p>
                <div className="button-content">
                  <a className="a-text" href="/">
                    Learn more
                  </a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full box-content">
              <div className="content-1">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature4_bg.da2f2bdbea11c95080a8.png"
                  alt=""
                />
              </div>
              <div className="content-2">
                <img
                  src="https://warehouse-blue.vercel.app/static/media/feature4.821e83ecc96bd79a8e9a.png"
                  alt=""
                />
              </div>
              <div className="content-3">
                <h3 className="title-content-3">Security Code</h3>
                <p className="sub-content-3">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password than you created, so only you can open the file.
                </p>
                <div className="button-content">
                  <a className="a-text" href="/">
                    Learn more
                  </a>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials container">
        <div className="container mx-auto">
          <div className="box-testimonials">
            <div className="box-content">
              <h2 className="text-testimonials">Testimonials</h2>
              <div className="slider w-100">
                <Swiper
                  // spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                >
                  <SwiperSlide className="content-slider">
                    <div className="content-1">
                      <div className="card">
                        <div className="card-avatar">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="card-text">
                          <div className="text-name">John Fang</div>
                          <div className="text-web">wordfaang.com</div>
                          <p>
                            Suspendisse ultrices at diam lectus nullam. Nisl,
                            sagittis viverra enim erat tortor ultricies massa
                            turpis. Arcu pulvinar aenean nam laoreet nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="content-slider">
                    <div className="content-1">
                      <div className="card">
                        <div className="card-avatar">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="card-text">
                          <div className="text-name">John Fang</div>
                          <div className="text-web">wordfaang.com</div>
                          <p>
                            Suspendisse ultrices at diam lectus nullam. Nisl,
                            sagittis viverra enim erat tortor ultricies massa
                            turpis. Arcu pulvinar aenean nam laoreet nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="content-slider">
                    <div className="content-1">
                      <div className="card">
                        <div className="card-avatar">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="card-text">
                          <div className="text-name">John Fang</div>
                          <div className="text-web">wordfaang.com</div>
                          <p>
                            Suspendisse ultrices at diam lectus nullam. Nisl,
                            sagittis viverra enim erat tortor ultricies massa
                            turpis. Arcu pulvinar aenean nam laoreet nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
