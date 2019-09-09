const onSkillHover = event => {
  event.preventDefault()
  const icon = $(event.target)
  $('.skills-head').text(icon.attr('alt'))
}

const onSkillLeave = event => {
  $('.skills-head').text('Skills')
}

$(() => {
  // $('.icon-socketio').innerHTML('')
  // $('.skills').on('mouseenter', '.icon', () => {})
  // $('.skills').on('mouseleave', '.icon', () => {})
  $('.icon').on({
    mouseenter: onSkillHover,
    mouseleave: onSkillLeave
  })
})
