function drawLine(start, end) {
  let px = 0, py = 0
  let tot_pix = [start,end]
  let N = Math.max(Math.abs(end.x - start.x), Math.abs(end.y - start.y))
  if (N === 0) return [start]
  
  for (i=0; i<N; i++){
    px = Math.floor(start.x + i * (end.x - start.x) / N)
    py = Math.floor(start.y + i * (end.y - start.y) / N)
    if (!(tot_pix.some(el => px === el.x && py === el.y))) tot_pix.splice(-1,0,{x : px, y : py})
  }
  return tot_pix;
}
