/* // ctrl + D키를 누르면 다중선택 가능
     mouse, 0
     cow, 1
     tiger, 2
     rabbit, 3
     dragon, 4
     snake, 5
     horse, 6
     sheep, 7
     monkey, 8
     chick, 9
     dog, 10
     pig, 11
    */

     const qnaList = [
        {
          q: 'Q1. 꿈에 그리던 미림마이스터고에 입학한 나! 교실에 들어가보니 처음 보는 친구들이 많다. 이때 나는?',
          a: [
            { answer: ' 어색함은 못 참지~ 먼저 말 걸어볼까?', type: [1, 2, 4, 9] },
            { answer: ' 친해지고 싶은데... 먼저 말 걸어주면 좋겠다ㅠㅠ', type: [0, 3, 6, 5, 10, 8] },
          ]
        },
        {
          q: 'Q2. 넷플릭스에서 최근에 나온 아주 달달한 하이틴 영화를 볼 때 나는? ',
          a: [
            { answer: ' 오 남주 연기 미쳤는데? 스토리 진행도 깔끔해', type: [0, 3, 2, 8] },
            { answer: ' 남주랑 결혼식은 어디서 하면 좋을까? 아무래도 제주도가 좋겠지? 부케는 영자한테 줘야지~^^', type: [1, 6, 5, 10] },

          ]
        },
        {
          q: 'Q3. "와 대박! 너 과제 별로 열심히 안 하는 것 같았는데 진짜 잘했다! 완전 재능충이었네~"라는 말을 들었을 때 나는?',
          a: [
            { answer: ' (내 재능을 칭찬하다니.. 기분 좋다..ㅎㅎ)', type: [1, 3, 2, 10, 8] },
            { answer: ' (지금 나랑 싸우자는 거? 내가 과제를 얼마나 열심히 했는데 니가 뭘 알아...)', type: [7, 9, 11] },
          ]
        },
        {
          q: 'Q4. 다음주까지 해야하는 과제를 하기 위해 계획을 잡는다면 그 기준이 되는 것은?',
          a: [
            { answer: ' 마감일을 기준으로 기한 내에 끝내기 위해 빠르게 실행한다 ', type: [1, 2, 4 ] },
            { answer: ' 기한 내에 끝내기 위해 시작일부터 정하고 시작한다 ', type: [7, 10, 8, 9, 11 ] },
          ]
        },
        {
          q: 'Q5.몰아치는 수행평가와 과제를 끝내고난 뒤 에너지가 빠질대로 빠진 나! 빠진 에너지를 채우기 위해 나는?',
          a: [
            { answer: ' 역시 친구가 최고! 친구와 만나 즐겁게 논다', type: [1,7, 10, 4, 9 ] },
            { answer: ' 친구는 무슨... 혼자 조용히 집에서 쉰다', type: [0, 3, 6, 11]},
          ]
        },

        {
          q: 'Q6.  새로운 프로젝트를 시작하려고 한다! 이때 나의 모습은?',
          a: [
            { answer: ' 이전까지 해온 방식이 더 좋지. 이미 보장되어 있는 방법 아닌가?', type: [4, 9, 11 ] },
            { answer: ' 이번엔 새로운 방식으로 해볼까? 이게 더 좋은 방법일지도 몰라', type: [0, 3, 6, 10 ] },

          ]
        },
        {
          q: 'Q7 "나 한 달 동안 준비한 자격증 시험 떨어졌어... ㅠㅠ"이 말을 듣고 내가 친구에게 할 말은?',
          a: [
            { answer: ' 왜 떨어졌는데?', type: [1,7, 11 ] },
            { answer: ' 괜찮아ㅠㅠ 다음에 더 열심히 준비해서 시험보면 꼭 붙을 수 있을거야.. 힘내!!', type: [2, 4, 9 ] },

          ]
        },
        {
          q: 'Q8 제주도로 수학여행을 온 나! 마지막날은 자유롭게 관광을 해도 된다는 선생님 말씀을 듣고난 뒤 나는?',
          a: [
            { answer: ' 4시까지는 숙소에 와야하니까 3시 30분쯤에 미림짬뽕집에서 출발하고...', type: [0, 4, 9 ] },
            { answer: ' 일단 피곤하니까 잠부터 자고 내일 생각해보자!', type: [3, 2, 6, 5, 10, 8 ] },

          ]
        },
        {
          q: 'Q9 드디어 기다리고 기다리던 여름방학이다! 일주일에 내가 약속 잡는 횟수는?',
          a: [
            { answer: ' 예이~ 기왕 노는거 적어도 일주일에 3번은 나가서 놀아야지~', type: [7, 0, 5, 9 ] },
            { answer: ' 3번? 한 달에 3번 잡는 것도 부담스러운데...', type: [1, 3, 6, 11 ] },

          ]
        },
        {
          q: 'Q10 독서 포트폴리오에 쓸 책을 읽으려 한다! 책을 읽을 때 내가 더 쉽게 놓치는 것은?',
          a: [
            { answer: ' 등장인물은 왜 이런 일을 한 걸까?', type: [4, 9, 11] },
            { answer: ' 등장인물들의 이름', type: [0, 2, 6, 5 ] },

          ]
        },
        {
          q: 'Q11 "욜~ 오늘 OOO 분위기 미쳤는데~~"라고 말하는 친구들에 반응에 나는? ',
          a: [
            { answer: ' ㅋㅋㅋ어디가 어떻게 분위기 있는데? 구체적으로 말해봐~', type: [1, 4, 9, 11 ] },
            { answer: ' 아 뭐야 ㅋㅋㅋ 오늘 좀 신경 쓴 보람이 있네 고마워~~', type: [7, 0, 3, 6, 10] },

          ]
        },
        {
          q: 'Q12 방과후 시작 전에 반 친구들과 아마스빈에 들린 나! 오늘따라 유독 사람이 많아 줄을 서야할 때 줄을 기다리면서 나는?',
          a: [
            { answer: ' 가게에 들어가기 직전에 QR 코드를 미리 다 켜둔 상태로 들어간다', type: [3, 6, 4, 9 ] },
            { answer: ' 가게에 들어가고 나면 그제서야 QR 코드를 후다닥 킨다', type: [0, 2, 5, 10, 8] },
        
          ]
        }
      ]

      const infoList = [
        {
          name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
          desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
        },
        {
          name: '난 너만 봐, 정직한 연애 스타일의 <소>',
          desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
        },
        {
          name: '야 사귀자, 사랑을 쟁취하는 <호랑이>',
          desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
        },
        {
          name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
          desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
        },
        {
          name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>',
          desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
        },
        {
          name: '기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>',
          desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
        },
        {
          name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>',
          desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
        },
        {
          name: '난 너랑 하는 것들 다 좋아, 순종적인 <양>',
          desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
        },
        {
          name: '난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>',
          desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
        },
        {
          name: '이건 이거고 저건 저거지 , 공과사 확실한 <닭>',
          desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
        },
        {
          name: '난 네가 좋아 너무 좋아, 애교만땅 <개>',
          desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
        },
        {
          name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>',
          desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
        },
      ]