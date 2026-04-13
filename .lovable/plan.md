

## Plan: Update roster and modal

### Changes

1. **Remove hanging girl** (`src/routes/index.tsx`)
   - Remove `<Hanging />` component and its import
   - Reduce top padding since hanging image is gone (140px → 80px)

2. **Remove "members" label and enlarge roster** (`src/components/roster.tsx`)
   - Delete the `<p>members</p>` block
   - Increase grid tile size from 80px columns to 100px, PFP from 60px to 80px, name font from 10px to 13px
   - Add links for each member: Vale gets telegram + discord, Signal gets discord, VK gets telegram

3. **Update member data** (`src/components/roster.tsx`)
   - Vale: telegram `https://t.me/carfaxing`, discord `https://discord.com/users/130699265839333377`
   - Signal: discord `https://discord.com/users/1454522329588563968`
   - VK: telegram `https://t.me/deepincision`

4. **Redesign modal with typewriter bio and solid background** (`src/components/membermodal.tsx`)
   - Add typewriter effect: bio text types out character by character using a `useState` + `useEffect` interval
   - Make modal background fully opaque (#080808, not transparent)
   - Increase bio font size from 11px to 14px
   - Show multiple action buttons per member (Telegram and/or Discord depending on who has what), plus Close
   - Update `MemberData` interface to include optional `discord` field
   - Grid columns for actions: dynamic based on how many links exist + close button

5. **Add typewriter keyframe** (`src/styles.css`)
   - Add a blinking cursor animation for the typewriter caret

### Technical details
- Typewriter: `useEffect` with `setInterval` incrementing a character index, clearing on unmount or member change
- Member data structure gains `discord: string | null`
- Modal action row becomes dynamic: render Telegram link if `link` exists, Discord link if `discord` exists, always render Close

