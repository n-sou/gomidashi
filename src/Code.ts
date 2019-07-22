function getTrashKind(day: number): string {
  let trashKind: string = ''
  switch (day) {
    case 1:
    case 4:
      trashKind = '可燃ごみ'
      break
    case 3:
      trashKind = '紙・布・ダンボール'
      break
    case 5:
      trashKind = '不燃ごみ・ビン・カン'
      break
    case 6:
      trashKind = 'プラスチック'
      break
  }
  return trashKind
}

function createMessage(): string {
  const date: Date = new Date()
  date.setDate(date.getDate() + 1)
  const trashKind: string = getTrashKind(date.getDay())
  if (trashKind === '') return
  const message: string = `明日は${trashKind}を捨てる日だよ`
  return message
}

function notice(): void {
  const APITOKEN: string = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

  const options: any = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${APITOKEN}`
    },
    payload: {
      message: createMessage()
    }
  }
  const response: GoogleAppsScript.URL_Fetch.UrlFetchApp = UrlFetchApp.fetch(
    'https://notify-api.line.me/api/notify',
    options
  )
  Logger.log(response)
}
