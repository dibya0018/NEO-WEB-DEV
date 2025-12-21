"use client"

import { useEffect, useRef } from "react"

export default function AppointmentEmbedPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const removeElement = () => {
      try {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
        if (iframeDocument) {
          // Hide bubble element with specific classes
          const bubbleSelectors = [
            '.bubble-element',
            '.bubble-r-container',
            '[class*="bubble-element"]',
            '[class*="bubble-r-container"]',
            '[class*="baTcaEaX"]'
          ]
          
          bubbleSelectors.forEach(selector => {
            try {
              const elements = iframeDocument.querySelectorAll(selector)
              elements.forEach((element) => {
                const htmlElement = element as HTMLElement
                const classList = htmlElement.className || ''
                // Check if element has bubble-related classes
                if (classList.includes('bubble-element') || 
                    classList.includes('bubble-r-container') ||
                    classList.includes('baTcaEaX')) {
                  htmlElement.style.display = 'none !important'
                  htmlElement.style.visibility = 'hidden !important'
                  htmlElement.style.opacity = '0 !important'
                  htmlElement.style.height = '0 !important'
                  htmlElement.style.overflow = 'hidden !important'
                }
              })
            } catch (e) {
              // Selector might not be valid, continue
            }
          })

          // Try to find and remove the element with matching styles
          const allElements = iframeDocument.querySelectorAll('*')
          allElements.forEach((element) => {
            const htmlElement = element as HTMLElement
            const style = htmlElement.getAttribute('style') || ''
            const classList = htmlElement.className || ''
            
            // Check for bubble element classes
            if (classList.includes('bubble-element') && 
                (classList.includes('bubble-r-container') || classList.includes('baTcaEaX'))) {
              htmlElement.style.display = 'none !important'
              htmlElement.style.visibility = 'hidden !important'
              htmlElement.remove()
            }
            
            // Check for the specific style attributes
            if (style.includes('background-color: rgb(255, 255, 255)') && 
                style.includes('align-self: flex-start') && 
                style.includes('order: 2') &&
                style.includes('padding: 10px 20px') &&
                style.includes('z-index: 29')) {
              htmlElement.style.display = 'none'
              htmlElement.remove()
            }
          })

          // Inject CSS to hide matching elements
          let styleElement = iframeDocument.head.querySelector('style[data-hide-elements]') as HTMLStyleElement
          if (!styleElement) {
            styleElement = iframeDocument.createElement('style')
            styleElement.setAttribute('data-hide-elements', 'true')
            iframeDocument.head.appendChild(styleElement)
          }
          
          styleElement.textContent = `
            .bubble-element,
            .bubble-r-container,
            [class*="bubble-element"],
            [class*="bubble-r-container"],
            [class*="baTcaEaX"] {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            *[style*="background-color: rgb(255, 255, 255)"][style*="align-self: flex-start"][style*="order: 2"][style*="padding: 10px 20px"][style*="z-index: 29"] {
              display: none !important;
              visibility: hidden !important;
            }
          `
        }
      } catch (error) {
        // Cross-origin restrictions - cannot access iframe content
        console.log('Cannot access iframe content due to CORS restrictions')
      }
    }

    const handleLoad = () => {
      removeElement()
    }

    iframe.addEventListener('load', handleLoad)
    
    // Try multiple times as content may load dynamically
    const intervals = [500, 1000, 2000, 3000]
    const timeouts = intervals.map(delay => setTimeout(removeElement, delay))

    return () => {
      iframe.removeEventListener('load', handleLoad)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <div 
  className="min-h-screen w-full" 
  style={{ 
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%'
  }}
>
  <iframe 
    ref={iframeRef}
    src="https://app.fyndbetter.com/neotrue_apt?apttype=inclinic&location="
    width="100%"
    height="100%"
    className="border-0"
    style={{ 
      position: 'absolute',
      top: '-60px',
      left: '0',
      width: '100%',
      height: 'calc(100% + 60px)',
      overflow: 'hidden',
      border: 'none'
    }}
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>
  )
}

