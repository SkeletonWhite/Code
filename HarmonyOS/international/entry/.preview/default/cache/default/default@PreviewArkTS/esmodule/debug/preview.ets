struct preview{build(){Text(`${this.currentYear}-${this.currentMonth + 1 >= 10 ? '' : '0'}${this.currentMonth + 1}`)
          .fontSize(16)
          .fontColor(Color.Black)}}