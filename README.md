## 🚙 Project

* <b> SW Univ, Joint Hackathon </b>
* 프로젝트 기간: 2020.02.04 ~ 2021.02.06
> 당신만의 완벽한 드라이브 코스, 차들이.


## 🛠 개발 환경 및 사용한 라이브러리 (Development Environment and Using Library)

### Development Environment

![Swift](https://img.shields.io/badge/Swift-5.0-orange.svg) [![Creative Commons License](https://img.shields.io/badge/license-CC--BY--4.0-blue.svg)](http://creativecommons.org/licenses/by/4.0/) </br>
<img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white"> <img src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white"> 


### Using Library  
| 라이브러리(Library) | 목적(Purpose) | 버전(Version) |
|:---:|:----------:|:----:|
| Alamofire   | 서버 통신 | 5.4.1 |
| Kingfisher  | 이미지 처리 | 5.15.8 |


<br>
 <br>
 
 ## 📜 Coding Convention 
 <details>
 <summary> 📂 폴더구조 </summary>
 <div markdown="1">       

<br>

**Resources**
* AppDelegate
* SceneDelegate
* Assets.xcassets
* Storyboard
* APIService
    * APIConstant
* Font

**Sources**
* VC
* Class
* Cell
* Model
    * GenericResponse
* Extension
            
**Info.plist**

<br>

<img width="265" alt="Sources" src="https://user-images.githubusercontent.com/63224278/103536269-89b0d480-4ed5-11eb-9202-0ed38090b499.png">

<br>
 </div>
 </details>
 
 
 <details>
 <summary> ⚙️ 폴더링 규칙 </summary>
 <div markdown="1"> 
 
 
 규칙

- 폴더링 한 후 Sources 폴더에 있는 파일들은 각 파일 하위에 자신 스토리보드 이름에 해당하는 폴더를 만들어 관리합니다. 

<img width="265" alt="Sources" src="https://user-images.githubusercontent.com/63224278/103536203-6b4ad900-4ed5-11eb-9614-b4731aa3773a.png">

- 파일 네이밍 시, 접두에 스토리보드이름을 붙여서 네이밍합니다.
    -  (ex. 스토리보드 이름이 Main, Watering이라고 가정했을 때 cell파일 생성 시 MainBlahblahCVC, WateringBlahblahTVC와 같이 네이밍합니다.)
        
👉🏻 [자세히](https://github.com/TeamCherish/Cherish-iOS/wiki/CodingConvention)

 </div>
 </details>



<details>
<summary> 🖋 네이밍 </summary>
<div markdown="1">       

**Class & Struct**

- 클래스/구조체 이름은 **UpperCamelCase**를 사용합니다.

- 클래스 이름에는 접두사를 붙이지 않습니다.

 좋은 예 >

  ```swift
  class CherishTVC: UITableViewCell
  ```

 나쁜 예 >

  ```swift
  struct cherishCVCInfo { }
  ```

**함수 & 변수 & 상수**

- 함수와 변수에는 **lowerCamelCase**를 사용합니다.

- 버튼명에는 **Btn 약자**를 사용합니다.

- 모든 IBOutlet에는 해당 클래스명을 뒤에 붙입니다. 
    - ~~ImageView, ~~Label, ~~TextField와 같이 속성값을 붙여줍니다.
    
- 테이블 뷰는 **TV**, 컬렉션뷰는 **CV**로 줄여서 네이밍합니다.

- 테이블 뷰 셀은 **TVC**, 컬렉션뷰 셀은 **CVC**로 줄여서 네이밍합니다.

 좋은 예 >

  ```swift
  @IBOutlet weak var wateringBtn: UIButton!
  @IBOutlet weak var cherishMainView: UIView!
  @IBOutlet weak var cherishTV: UITableView!
  ```

 나쁜 예 >

  ```swift
  @IBOutlet weak var ScrollView: UIScrollView!
  @IBOutlet weak var cherishcollectionview: UICollectionView!
  @IBOutlet weak var tagcollectionview: UICollectionView!
  @IBOutlet weak var tableview: UITableView!
  ```
<br>

</div>
</details>
 
 
 
 <details>
 <summary> 🏷 주석 </summary>
 <div markdown="1">       
 
 - `// MARK:` 를 사용해서 연관된 코드를 구분짓습니다.
 - `///` 를 사용해서 문서화에 사용되는 주석을 남깁니다. (ex. /// 사용자 프로필을 그려주는 뷰)
 <br>

 </div>
 </details>


<details>
<summary> 📎 기타 </summary>
<div markdown="1">       

- viewDidLoad() 내에는 **Function만 위치**시킵니다.
- 중복되는 부분들은 +Extension.swift로 만들어 활용합니다.
- 메인컬러와 같이 자주 쓰이는 컬러들은 Asset에 Color Set을 만들어서 사용합니다.
- , 뒤에 반드시 띄어쓰기를 합니다.
- 함수끼리 1줄 개행합니다.
- 중괄호는 아래와 같은 형식으로 사용합니다.
```swift
if (condition){

  Statements
  /*
  ...
  */
  
}
```
</div>
</details>
 
 
<br>

 다음 스타일 Guide를 참고헀습니다. 👉🏻[Style Guide](https://github.com/StyleShare/swift-style-guide)


## 💻 Github mangement

<details>
<summary> 차들이🚙 Gitflow </summary>
<div markdown="1">       


- main 브랜치

 메인(main): 메인 브랜치

 기능(cherish뷰이름): 기능별 (뷰별) 로컬 브랜치 

- 커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.

- 풀리퀘스트를 통해 코드 리뷰를 해보아요.

<br>

```
- Main
   ├── cherishMainView(각 Local Branch)
   ├── cherishAddView    
   └── cherishWateringView
```

<br>

**각자 자신이 맡은 기능 구현에 성공시! 브랜치 다 쓰고 병합하는 방법**

- 브랜치 만듦

```bash
git branch 기능(or 뷰)이름
```

- 원격 저장소에 로컬 브랜치 push

```bash
git push --set-upstream origin 브랜치이름(뷰이름)
```
```bash
git push -u origin 브랜치이름(뷰이름)
```


- 브랜치 전환

```bash
git checkout 뷰이름
```

- 코드 변경 (현재 **뷰이름** 브랜치)

```bash
git add .
git commit -m "커밋 메세지" origin 뷰이름
```

- 푸시 (현재 **뷰이름** 브랜치)

```bash
git push origin 뷰이름 브랜치
```

- 뷰이름 브랜치에서 할 일 다 했으면 **main** 브랜치로 전환

```bash
git checkout main
```

- 머지 (현재 **main** 브랜치)

```bash
git merge 뷰이름
```

- 다 쓴 브랜치 삭제 (local) (현재 **main** 브랜치)

```bash
git branch -d 뷰이름
```

- 다 쓴 브랜치 삭제 (remote) (현재 **main** 브랜치)

```bash
git push origin :뷰이름
```

- main pull (현재 **main** 브랜치)

```bash
git pull or git pull origin main
```

- main push (현재 **main** 브랜치)

```bash
git push or git push origin main
```
</div>
</details>
  

<br>
<br>
 

## Developer Introduction


| 팀원  | 소개 |역할 |
|:---:|:-------:|:---------------:|
| [진원](https://github.com/xmcodings) | 안녕하세요 김진원 입니다!  | - |
| [소형](https://github.com/sohyeong-dev) | 안녕하세요 이소형 입니다!  | - |


<br>
<br>
