/*
In a local Webrtc implementation is there a way to pass the answer to the other client after accepting the offer
Yes, in a WebRTC implementation, after a client accepts an offer, they can send an answer back to the other client. This is done using the setRemoteDescription() method, which is part of the WebRTC API. This method is used to set the remote description of the remote peer, which includes information about the media and network settings that the remote peer is using. Once the remote description has been set, the client can use the createAnswer() method to generate an answer that is based on the remote description, and then use the setLocalDescription() method to set the local description, which includes the answer that was generated. After the local description has been set, the client can send the answer to the other client using the appropriate signaling mechanism.

Daniel Silion
How would you send the answer?
After the local description has been set, the client can send the answer to the other client using the appropriate signaling mechanism. This typically involves using a signaling server to exchange messages between the clients. For example, the client could use the send() method of the RTCPeerConnection object to send the answer to the signaling server, which would then forward the message to the other client. The other client could then use the onmessage event of the RTCPeerConnection object to receive the answer and process it.

In a LOCAL (no stun) Webrtc implementation is there a way to pass the answer to the other client after accepting the offer
Yes, in a WebRTC implementation, after one client sends an offer to another client, the second client can accept the offer by creating an answer and sending it back to the first client. This is done using the createAnswer() method, which is part of the WebRTC API. Here is an example of how it might be used:

Copy code
// First, get the local audio and video tracks
const audioTrack = getLocalAudioTrack();
const videoTrack = getLocalVideoTrack();

// Create a new PeerConnection
const pc = new RTCPeerConnection();

// Add the local audio and video tracks to the PeerConnection
pc.addTrack(audioTrack, videoTrack);

// When the remote client sends an offer, handle it by creating an answer
pc.onicecandidate = (event) => {
  if (event.candidate) {
    // Send the ICE candidate to the remote client
    sendToRemoteClient(event.candidate);
  }
};

pc.ontrack = (event) => {
  // When the remote client adds a track, display it on the page
  displayRemoteTrack(event.track);
};

pc.onnegotiationneeded = async () => {
  // When negotiation is needed, create an answer
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  // Send the offer to the remote client
  sendToRemoteClient(offer);
};

// When the remote client sends an offer, accept it by creating an answer
pc.onnegotiationneeded = async () => {
  // When the remote client sends an offer, create an answer
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);

  // Send the answer back to the remote client
  sendToRemoteClient(answer);
};

// When the remote client adds a track, display it on the page
pc.ontrack = (event) => {
  displayRemoteTrack(event.track);
};
This is just one way to implement the process of sending and receiving offers and answers in WebRTC. The exact details of how you implement this will depend on your specific use case and the details of your WebRTC implementation.
*/


function getJSONParam() {
    // Get the current URL
    const url = new URL(window.location.href);

    // Get the value of the "id" parameter from the URL
    const json = url.searchParams.get('json');

    textoffer.value = json;
    clickofferpasted();
}

function clickofferpasted() {
    console.log('clickremoteoffer');
    document.getElementById('buttonofferpasted').disabled = true;
    peerConnection = createPeerConnection(lasticecandidate);
    peerConnection.ondatachannel = handledatachannel;
    textelement = document.getElementById('textoffer');
    textelement.readOnly = true;
    offer = JSON.parse(textelement.value);
    setRemotePromise = peerConnection.setRemoteDescription(offer);
    setRemotePromise.then(setRemoteDone, setRemoteFailed);
}

function setRemoteDone() {
    console.log('setRemoteDone');
    createAnswerPromise = peerConnection.createAnswer();
    createAnswerPromise.then(createAnswerDone, createAnswerFailed);
}

function setRemoteFailed(reason) {
    console.log('setRemoteFailed');
    console.log(reason);
}

function createAnswerDone(answer) {
    console.log('createAnswerDone');
    setLocalPromise = peerConnection.setLocalDescription(answer);
    setLocalPromise.then(setLocalDone, setLocalFailed);
    document.getElementById('spananswer').classList.toggle('invisible');
}

function createAnswerFailed(reason) {
    console.log('createAnswerFailed');
    console.log(reason);
}

function setLocalDone() {
    console.log('setLocalDone');
}

function setLocalFailed(reason) {
    console.log('setLocalFailed');
    console.log(reason);
}

function lasticecandidate() {
    console.log('lasticecandidate');
    textelement = document.getElementById('textanswer');
    answer = peerConnection.localDescription;
    textelement.value = JSON.stringify(answer);
}

function handledatachannel(event) {
    console.log('handledatachannel');
    dataChannel = event.channel;
    dataChannel.onopen = datachannelopen;
    dataChannel.onmessage = datachannelmessage;
}