let old = ''

// const onSkillHover = event => {
//   event.preventDefault()
//   const icon = $(event.target)
//   const alt = icon.attr('alt')
//   if (alt !== 'skills' && alt) {
//     old = alt
//   }
//   $('.skills-head').text(old)
// }

const onSkillLeave = event => {
  $('.skills-head').text('')
  $('.skills-head').hide()
  old = ''
}

$(() => {
  // $('.icon-socketio').innerHTML('')
  // $('.skills').on('mouseenter', '.icon', () => {})
  // $('.skills').on('mouseleave', '.icon', () => {})
  $('.skills').on('mouseover', (ev) => {
    event.preventDefault()
    const icon = $(event.target)
    const alt = icon.attr('alt')
    if (alt !== 'skills' && alt) {
      old = alt
    }
    $('.skills-head').text(old)
    $('.skills-head').show()
  })
  $('.skill-row').on({
    mouseleave: onSkillLeave
    // mouseenter: ev => setTimeout(onSkillHover(ev), 0),
    // mouseleave: ev => setTimeout(onSkillLeave(ev), 0)
  })
})
