import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
    const config = {};
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
    if(SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
        config.base = '/phzipsearch/';

    return defineConfig(config);
}
