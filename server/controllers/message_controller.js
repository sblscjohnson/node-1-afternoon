let messageArr = []
let id = 0;

module.exports = {
  
  create: (req, res) => {
    const {text, time} = req.body
    messageArr.push({id, text, time});
    id++;
    res.status(200).send(messageArr);
  },
  
  read: (req, res) => {
    res.status(200).send(messageArr);
  },
  
  update: (req,res) => {
    let {text} = req.body;
    let newID = req.params.id;
    let messageIndex = messageArr.findIndex((message) => { 
      return message.id === +newID
    })
    let message = messageArr[messageIndex]
    
    messageArr[messageIndex] = {
        id: message.id,
        text: text,
        time: message.time
      };
    res.status(200).send(messageArr);
  },
  
  delete: (req, res) => {
    let removeID = req.params.id;
    let messageIndex = messageArr.findIndex((message) =>  {
      return message.id === +removeID
      })
      messageArr.splice(messageIndex, 1)
  res.status(200).send(messageArr)  
  }
  
}