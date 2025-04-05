const ToastRoot = styled(ToastPrimitive.Root, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: mauve.mauve2,
  padding: '14px 18px',
  width: 300,
  borderRadius: 8,
  boxShadow: `0 2px 4px ${mauveA.mauveA10}, 0 10px 15px ${mauveA.mauveA1}`,
  outline: 'none',
  variants: {
    type: {
      success: {
        backgroundColor: green.green1,
      },
      error: {
        backgroundColor: red.red1,
      },
    },
  },
  '&:focus-visible': {
    boxShadow: `0 0 0 3px ${mauveA.mauveA12}`,
  },
})
